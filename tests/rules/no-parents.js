'use strict';

const rule = require( '../../src/rules/no-parents' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer Element#closest to .parents';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-parents', rule, {
	valid: [ 'parents()', '[].parents()', 'div.parents()', 'div.parents' ],
	invalid: [
		{
			code: '$("div").parents()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.parents()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().parents()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").parents())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
