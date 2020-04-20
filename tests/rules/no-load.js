'use strict';

const rule = require( '../../src/rules/no-load' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer fetch to .load';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-load', rule, {
	valid: [ 'load()', '[].load()', 'div.load()', 'div.load', '$.load()' ],
	invalid: [
		{
			code: '$("div").load()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.load()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().load()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").load())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
