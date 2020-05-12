'use strict';

const rule = require( '../../src/rules/no-and-self' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer .addBack to .andSelf';

const ruleTester = new RuleTester();
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
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$("div").append($("input").addBack())'
		}
	]
} );
