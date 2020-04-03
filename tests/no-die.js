'use strict';

const rule = require( '../rules/no-die' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

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
