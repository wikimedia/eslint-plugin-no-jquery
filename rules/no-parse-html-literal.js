'use strict'

// HTML regex (modified from jQuery)
const rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/
// Single tag regex (from jQuery)
const rsingleTag = /^<([a-z][^/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i

function allLiteral(node) {
  if (node.type === 'BinaryExpression') {
    return allLiteral(node.left) && allLiteral(node.right)
  } else {
    return node.type === 'Literal'
  }
}

module.exports = {
  meta: {
    docs: {},
    schema: []
  },

  create: function(context) {
    return {
      CallExpression: function(node) {
        if (node.callee.type === 'Identifier') {
          if (node.callee.name !== '$') return
          if (!node.arguments[0]) return
          if (node.arguments[0].type !== 'Literal') return
          const value = node.arguments[0].value
          if (typeof value !== 'string') return
          if (!value) return
          if (!rquickExpr.exec(value)) return
          if (rsingleTag.exec(value)) return
        } else {
          if (node.callee.type !== 'MemberExpression') return
          if (node.callee.object.name !== '$') return
          if (node.callee.property.name !== 'parseHTML') return
          const arg = node.arguments[0]
          if (!arg) return
          if (!allLiteral(arg)) return
        }

        context.report({
          node: node,
          message: 'Prefer DOM building to $.parseHTML on literals'
        })
      }
    }
  }
}
