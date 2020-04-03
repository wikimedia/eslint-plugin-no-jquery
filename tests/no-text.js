'use strict';

const rule = require( '../rules/no-text' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer Node#textContent to .text/$.text';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-text', rule, {
	valid: [ 'text()', '[].text()', 'div.text()', 'div.text' ],
	invalid: [
		{
			code: '$.text()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").text()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.text()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().text()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").text())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
