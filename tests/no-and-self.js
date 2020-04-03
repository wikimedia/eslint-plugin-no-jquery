'use strict';

const rule = require( '../rules/no-and-self' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer .addBack to .andSelf';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-and-self', rule, {
	valid: [ 'andSelf()', '[].andSelf()', 'div.andSelf()', 'div.andSelf' ],
	invalid: [
		{
			code: '$("div").andSelf(".foo")',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$("div").addBack(".foo")'
		},
		{
			code: '$div.andSelf(".foo")',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$div.addBack(".foo")'
		},
		{
			code: '$("div").first().andSelf()',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$("div").first().addBack()'
		},
		{
			code: '$("div").append($("input").andSelf())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
