'use strict';

const rule = require( '../rules/no-die' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer $.off/removeEventListener to die';

const ruleTester = new RuleTester();
ruleTester.run( 'no-die', rule, {
	valid: [ 'die()', '[].die()', 'div.die()', 'div.die' ],
	invalid: [
		{
			code: '$("div").die()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.die()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().die()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").die())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
