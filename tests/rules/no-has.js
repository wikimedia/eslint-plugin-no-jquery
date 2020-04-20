'use strict';

const rule = require( '../../src/rules/no-has' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = '.has is not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-has', rule, {
	valid: [ 'has()', '[].has()', 'div.has()', 'div.has' ],
	invalid: [
		{
			code: '$("div").has()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.has()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().has()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").has())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
