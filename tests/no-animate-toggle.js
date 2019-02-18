'use strict';

const rule = require( '../rules/no-animate-toggle' );
const RuleTester = require( 'eslint' ).RuleTester;

const showError = 'Prefer CSS transitions to $.show';
const hideError = 'Prefer CSS transitions to $.hide';
const toggleError = 'Prefer CSS transitions to $.toggle';

const ruleTester = new RuleTester();
ruleTester.run( 'no-animate-toggle', rule, {
	valid: [
		'$div.show()',
		'$("div").show()',
		'$("div").show',

		'$div.toggle()',
		'$("div").toggle()',
		'$("div").toggle',

		'$div.toggle()',
		'$div.toggle(false)',
		'$div.toggle(true)',
		'$div.toggle(variableCouldBeBoolean)',
		'$div.toggle(!!"0")',
		'$div.toggle(getBoolean())',
		'$("div").toggle()',
		'$("div").toggle'
	],
	invalid: [
		{
			code: '$("div").show("fast")',
			errors: [ { message: showError, type: 'CallExpression' } ]
		},
		{
			code: '$div.show(500)',
			errors: [ { message: showError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().show({duration:"slow"})',
			errors: [ { message: showError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").show({duration:"slow"}))',
			errors: [ { message: showError, type: 'CallExpression' } ]
		},

		{
			code: '$("div").hide("fast")',
			errors: [ { message: hideError, type: 'CallExpression' } ]
		},
		{
			code: '$div.hide(500)',
			errors: [ { message: hideError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().hide({duration:"slow"})',
			errors: [ { message: hideError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").hide({duration:"slow"}))',
			errors: [ { message: hideError, type: 'CallExpression' } ]
		},

		{
			code: '$("div").toggle("fast")',
			errors: [ { message: toggleError, type: 'CallExpression' } ]
		},
		{
			code: '$div.toggle(500)',
			errors: [ { message: toggleError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().toggle({duration:"slow"})',
			errors: [ { message: toggleError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").toggle({duration:"slow"}))',
			errors: [ { message: toggleError, type: 'CallExpression' } ]
		}
	]
} );
