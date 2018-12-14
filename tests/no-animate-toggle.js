'use strict'

const rule = require('../rules/no-animate-toggle')
const RuleTester = require('eslint').RuleTester

const showError = 'Prefer CSS transitions to $.show'
const hideError = 'Prefer CSS transitions to $.hide'
const toggleError = 'Prefer CSS transitions to $.toggle'

const ruleTester = new RuleTester()
ruleTester.run('no-animate-toggle', rule, {
  valid: [
    '$div.show()',
    '$("div").show()',
    '$("div").show',

    '$div.toggle()',
    '$("div").toggle()',
    '$("div").toggle',

    '$div.toggle()',
    '$("div").toggle()',
    '$("div").toggle'
  ],
  invalid: [
    {
      code: '$("div").show("fast")',
      errors: [{message: showError, type: 'CallExpression'}]
    },
    {
      code: '$div.show("fast")',
      errors: [{message: showError, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().show("fast")',
      errors: [{message: showError, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").show("fast"))',
      errors: [{message: showError, type: 'CallExpression'}]
    },

    {
      code: '$("div").hide(500)',
      errors: [{message: hideError, type: 'CallExpression'}]
    },
    {
      code: '$div.hide(500)',
      errors: [{message: hideError, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().hide(500)',
      errors: [{message: hideError, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").hide(500))',
      errors: [{message: hideError, type: 'CallExpression'}]
    },

    {
      code: '$("div").toggle({duration:"slow"})',
      errors: [{message: toggleError, type: 'CallExpression'}]
    },
    {
      code: '$div.toggle({duration:"slow"})',
      errors: [{message: toggleError, type: 'CallExpression'}]
    },
    {
      code: '$("div").first().toggle({duration:"slow"})',
      errors: [{message: toggleError, type: 'CallExpression'}]
    },
    {
      code: '$("div").append($("input").toggle({duration:"slow"}))',
      errors: [{message: toggleError, type: 'CallExpression'}]
    }
  ]
})
