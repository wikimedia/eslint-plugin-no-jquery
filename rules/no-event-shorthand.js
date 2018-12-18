'use strict'

const utils = require('./utils.js')

module.exports = {
  meta: {
    docs: {},
    schema: []
  },

  create: function(context) {
    const forbidden = [
      // Browser
      'error',
      'resize',
      'scroll',
      // Form
      'blur',
      'change',
      'focus',
      'focusin',
      'focusout',
      'select',
      'submit',
      // Keyboard
      'keydown',
      'keypress',
      'keyup',
      // Mouse
      'click',
      'contextmenu',
      'dblclick',
      'mousedown',
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mouseout',
      'mouseover',
      'mouseup'
    ]

    return {
      CallExpression: function(node) {
        if (node.callee.type !== 'MemberExpression') return
        if (forbidden.indexOf(node.callee.property.name) === -1) return

        if (utils.isjQuery(node)) {
          context.report({
            node: node,
            message:
              'Prefer $.on or $.trigger to $.' + node.callee.property.name
          })
        }
      }
    }
  }
}
