'use strict';

const rule = require( '../../src/rules/no-live' );
const RuleTester = require( '../../tools/rule-tester' );

const liveError = 'Prefer .on/EventTarget#addEventListener to .live';
const dieError = 'Prefer .off/EventTarget#removeEventListener to .die';

const ruleTester = new RuleTester();
ruleTester.run( 'no-live', rule, {
	valid: [
		'live()',
		'[].live()',
		'div.live()',
		'div.live',

		'die()',
		'[].die()',
		'div.die()',
		'div.die'
	],
	invalid: [
		{
			code: '$("div").live()',
			errors: [ liveError ]
		},
		{
			code: '$div.live()',
			errors: [ liveError ]
		},
		{
			code: '$("div").first().live()',
			errors: [ liveError ]
		},
		{
			code: '$("div").append($("input").live())',
			errors: [ liveError ]
		},

		{
			code: '$("div").die()',
			errors: [ dieError ]
		},
		{
			code: '$div.die()',
			errors: [ dieError ]
		},
		{
			code: '$("div").first().die()',
			errors: [ dieError ]
		},
		{
			code: '$("div").append($("input").die())',
			errors: [ dieError ]
		}
	]
} );
