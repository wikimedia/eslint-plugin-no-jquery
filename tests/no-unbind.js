'use strict';

const rule = require( '../rules/no-unbind' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer $.off/removeEventListener to unbind';

const ruleTester = new RuleTester();
ruleTester.run( 'no-unbind', rule, {
	valid: [ 'unbind()', '[].unbind()', 'div.unbind()', 'div.unbind' ],
	invalid: [
		{
			code: '$("div").unbind()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.unbind()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().unbind()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").unbind())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
