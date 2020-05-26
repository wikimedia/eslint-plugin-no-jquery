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
			errors: [ error ]
		},
		{
			code: '$div.unbind()',
			errors: [ error ]
		},
		{
			code: '$("div").first().unbind()',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").unbind())',
			errors: [ error ]
		}
	]
} );
