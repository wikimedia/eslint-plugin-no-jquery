'use strict';

const rule = require( '../rules/no-error-shorthand' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer $.on or $.trigger to $.error';

const ruleTester = new RuleTester();
ruleTester.run( 'no-error-shorthand', rule, {
	valid: [ 'error()', '[].error()', 'div.error()', 'div.error', '$.error()' ],
	invalid: [
		{
			code: '$("div").error()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.error()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().error()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").error())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
