'use strict';

const rule = require( '../../src/rules/no-toggle' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '.toggle is not allowed. This rule is deprecated, use no-visibility.';

const ruleTester = new RuleTester();
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
