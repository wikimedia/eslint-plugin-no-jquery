'use strict';

const rule = require( '../rules/no-html' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer Element#innerHTML to $.html';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-html', rule, {
	valid: [ 'html()', '[].html()', 'div.html()', 'div.html' ],
	invalid: [
		{
			code: '$("div").html()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.html()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().html()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").html())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
