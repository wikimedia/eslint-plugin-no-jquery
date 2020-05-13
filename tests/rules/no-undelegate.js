'use strict';

const rule = require( '../../src/rules/no-undelegate' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer .off/EventTarget#removeEventListener to .undelegate. This rule is deprecated, use no-delegate.';

const ruleTester = new RuleTester();
ruleTester.run( 'no-undelegate', rule, {
	valid: [
		'undelegate()',
		'[].undelegate()',
		'div.undelegate()',
		'div.undelegate'
	],
	invalid: [
		{
			code: '$("div").undelegate()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.undelegate()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().undelegate()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").undelegate())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
