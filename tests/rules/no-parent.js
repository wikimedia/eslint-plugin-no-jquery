'use strict';

const rule = require( '../../src/rules/no-parent' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer Node#parentElement to .parent';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-parent', rule, {
	valid: [ 'parent()', '[].parent()', 'div.parent()', 'div.parent' ],
	invalid: [
		{
			code: '$("div").parent()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.parent()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().parent()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").parent())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
