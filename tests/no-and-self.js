'use strict';

const rule = require( '../rules/no-and-self' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer $.addBack to $.andSelf';

const ruleTester = new RuleTester();
ruleTester.run( 'no-andSelf', rule, {
	valid: [ 'andSelf()', '[].andSelf()', 'div.andSelf()', 'div.andSelf' ],
	invalid: [
		{
			code: '$("div").andSelf()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.andSelf()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().andSelf()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").andSelf())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
