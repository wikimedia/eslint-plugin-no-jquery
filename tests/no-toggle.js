'use strict';

const rule = require( '../rules/no-toggle' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = '.toggle is not allowed. This rule is deprecated, use no-visibility.';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-toggle', rule, {
	valid: [ 'toggle()', '[].toggle()', 'div.toggle()', 'div.toggle' ],
	invalid: [
		{
			code: '$("div").toggle()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.toggle()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().toggle()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").toggle())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
