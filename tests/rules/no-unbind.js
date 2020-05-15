'use strict';

const rule = require( '../../src/rules/no-unbind' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer .off/EventTarget#removeEventListener to .unbind. This rule is deprecated, use no-bind.';

const ruleTester = new RuleTester();
ruleTester.run( 'no-unbind', rule, {
	valid: [ 'unbind()', '[].unbind()', 'div.unbind()', 'div.unbind' ],
	invalid: [
		{
			code: '$("div").unbind()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.unbind()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().unbind()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").unbind())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
