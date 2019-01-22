'use strict'

const utils = require('./utils.js')

module.exports = {
  meta: {
    docs: {},
    schema: []
  },

  create: function(context) {
    return {
      CallExpression: function(node) {
        if (node.callee.type !== 'MemberExpression') return
        if (node.callee.object.name === '$') return
        if (node.callee.property.name !== 'unload') return

        if (utils.isjQuery(node)) {
          context.report({
            node: node,
            message: 'Prefer $.on or $.trigger to $.unload'
          })
        }
      }
    }
  }
}
