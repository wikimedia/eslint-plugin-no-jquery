'use strict';

const rule = require( '../rules/no-fade' );
const RuleTester = require( 'eslint' ).RuleTester;

const inError = 'Prefer CSS transitions to $.fadeIn';
const outError = 'Prefer CSS transitions to $.fadeOut';
const toError = 'Prefer CSS transitions to $.fadeTo';
const toggleError = 'Prefer CSS transitions to $.fadeToggle';

const ruleTester = new RuleTester();
ruleTester.run( 'no-fade', rule, {
	valid: [
		'fadeIn()',
		'[].fadeIn()',
		'div.fadeIn()',
		'div.fadeIn',

		'fadeOut()',
		'[].fadeOut()',
		'div.fadeOut()',
		'div.fadeOut',

		'fadeTo()',
		'[].fadeTo()',
		'div.fadeTo()',
		'div.fadeTo',

		'fadeToggle()',
		'[].fadeToggle()',
		'div.fadeToggle()',
		'div.fadeToggle'
	],
	invalid: [
		{
			code: '$("div").fadeIn()',
			errors: [ { message: inError, type: 'CallExpression' } ]
		},
		{
			code: '$div.fadeIn()',
			errors: [ { message: inError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().fadeIn()',
			errors: [ { message: inError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").fadeIn())',
			errors: [ { message: inError, type: 'CallExpression' } ]
		},

		{
			code: '$("div").fadeOut()',
			errors: [ { message: outError, type: 'CallExpression' } ]
		},
		{
			code: '$div.fadeOut()',
			errors: [ { message: outError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().fadeOut()',
			errors: [ { message: outError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").fadeOut())',
			errors: [ { message: outError, type: 'CallExpression' } ]
		},

		{
			code: '$("div").fadeTo()',
			errors: [ { message: toError, type: 'CallExpression' } ]
		},
		{
			code: '$div.fadeTo()',
			errors: [ { message: toError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().fadeTo()',
			errors: [ { message: toError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").fadeTo())',
			errors: [ { message: toError, type: 'CallExpression' } ]
		},

		{
			code: '$("div").fadeToggle()',
			errors: [ { message: toggleError, type: 'CallExpression' } ]
		},
		{
			code: '$div.fadeToggle()',
			errors: [ { message: toggleError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().fadeToggle()',
			errors: [ { message: toggleError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").fadeToggle())',
			errors: [ { message: toggleError, type: 'CallExpression' } ]
		}
	]
} );
