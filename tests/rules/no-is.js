'use strict';

const rule = require( '../../src/rules/no-is' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Element#matches to .is';

const ruleTester = new RuleTester();
ruleTester.run( 'no-is', rule, {
	valid: [ 'is()', '[].is()', 'div.is()', 'div.is' ],
	invalid: [
		{
			code: '$("div").is()',
			errors: [ error ]
		},
		{
			code: '$div.is()',
			errors: [ error ]
		},
		{
			code: '$("div").first().is()',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").is())',
			errors: [ error ]
		}
	]
} );
