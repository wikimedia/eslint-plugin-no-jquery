'use strict';

const rule = require( '../rules/no-undelegate' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer $.off/removeEventListener to undelegate';

const ruleTester = new RuleTester();
ruleTester.run( 'no-undelegate', rule, {
	valid: [
		'undelegate()',
		'[].undelegate()',
		'div.undelegate()',
		'div.undelegate'
	],
	invalid: [
		{
			code: '$("div").undelegate()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.undelegate()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().undelegate()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").undelegate())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
