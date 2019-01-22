'use strict'

const utils = require('./utils.js')

module.exports = {
  meta: {
    docs: {},
    schema: []
  },

  create: function(context) {
    return {
      MemberExpression: function(node) {
        if (node.property.name !== 'selector') return
        if (node.parent.callee === node) return

        if (utils.isjQuery(node)) {
          context.report({
            node: node,
            message: '$.selector is not allowed'
          })
        }
      }
    }
  }
}
