'use strict';

const rule = require( '../rules/no-size' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer length to $.size';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-size', rule, {
	valid: [ 'size()', '[].size()', 'div.size()', 'div.size' ],
	invalid: [
		{
			code: '$("div").size()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.size()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().size()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").size())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
