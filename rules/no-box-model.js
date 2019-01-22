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
        if (node.property.name !== 'boxModel') return

        context.report({
          node: node,
          message: '$.boxModel is not allowed'
        })
      }
    }
  }
}
