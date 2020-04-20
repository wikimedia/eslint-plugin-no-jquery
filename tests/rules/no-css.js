'use strict';

const rule = require( '../../src/rules/no-css' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer Window#getComputedStyle to .css/$.css';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-css', rule, {
	valid: [ 'css()', '[].css()', 'div.css()', 'div.css' ],
	invalid: [
		{
			code: '$.css()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").css()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.css()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().css()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").css())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
