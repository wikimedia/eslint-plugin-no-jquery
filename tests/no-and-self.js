'use strict';

const rule = require( '../rules/no-and-self' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer $.addBack to $.andSelf';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-and-self', rule, {
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
