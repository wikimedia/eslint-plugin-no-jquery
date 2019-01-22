'use strict'

module.exports = {
  meta: {
    docs: {},
    schema: []
  },

  create: function(context) {
    return {
      MemberExpression: function(node) {
        if (node.object.name !== '$') return
        if (node.property.name !== 'support') return

        context.report({
          node: node,
          message: '$.support is not allowed'
        })
      }
    }
  }
}
