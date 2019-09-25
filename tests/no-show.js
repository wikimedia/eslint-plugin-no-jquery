'use strict';

const rule = require( '../rules/no-show' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = '$.show is not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-show', rule, {
	valid: [ 'show()', '[].show()', 'div.show()', 'div.show' ],
	invalid: [
		{
			code: '$("div").show()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.show()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().show()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").show())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
