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
        if (node.property.name !== 'fx') return
        if (!node.parent.property) return
        if (node.parent.property.name !== 'interval') return

        context.report({
          node: node,
          message: '$.fx.interval is not allowed'
        })
      }
    }
  }
}
