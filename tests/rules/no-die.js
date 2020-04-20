'use strict';

const rule = require( '../../src/rules/no-die' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer .off/EventTarget#removeEventListener to .die. This rule is deprecated, use no-live.';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-die', rule, {
	valid: [ 'die()', '[].die()', 'div.die()', 'div.die' ],
	invalid: [
		{
			code: '$("div").die()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.die()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().die()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").die())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
