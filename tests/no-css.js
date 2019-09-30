'use strict';

const rule = require( '../rules/no-css' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer Window#getComputedStyle to $.css';

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
