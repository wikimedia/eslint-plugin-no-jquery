'use strict';

const rule = require( '../../src/rules/no-val' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer HTMLInputElement#value to .val';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-val', rule, {
	valid: [ 'val()', '[].val()', 'div.val()', 'div.val' ],
	invalid: [
		{
			code: '$("div").val()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.val()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().val()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").val())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
