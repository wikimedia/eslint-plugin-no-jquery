'use strict'

module.exports = {
  meta: {
    docs: {},
    schema: []
  },

  create: function(context) {
    return {
      CallExpression: function(node) {
        if (node.callee.type !== 'Identifier') return
        if (node.callee.name !== '$') return
        if (!node.arguments[0]) return
        if (node.arguments[0].type !== 'Literal') return
        const value = node.arguments[0].value
        if (typeof value !== 'string') return
        if (!value) return
        if (value === '#') return

        // Simple HTML check (copied from jQuery)
        if (
          value[0] === '<' &&
          value[value.length - 1] === '>' &&
          value.length >= 3
        ) {
          return
        }
        // HTML regex (modified from jQuery)
        const rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/
        const match = rquickExpr.exec(value)
        if (match) return

        const selectorContext = node.arguments[1]
        if (selectorContext) {
          if (
            selectorContext.type !== 'Literal' &&
            !(
              selectorContext.type === 'Identifier' &&
              selectorContext.name === 'undefined'
            )
          ) {
            return
          }
          if (selectorContext.value === '#') return
        }

        context.report({
          node: node,
          message: 'Global selectors are not allowed'
        })
      }
    }
  }
}
