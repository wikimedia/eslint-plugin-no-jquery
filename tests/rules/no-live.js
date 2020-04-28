'use strict';

const rule = require( '../../src/rules/no-live' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const liveError = 'Prefer .on/EventTarget#addEventListener to .live';
const dieError = 'Prefer .off/EventTarget#removeEventListener to .die';

const ruleTester = new RuleTesterAndDocs();
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
			errors: [ { message: liveError, type: 'CallExpression' } ]
		},
		{
			code: '$div.live()',
			errors: [ { message: liveError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().live()',
			errors: [ { message: liveError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").live())',
			errors: [ { message: liveError, type: 'CallExpression' } ]
		},

		{
			code: '$("div").die()',
			errors: [ { message: dieError, type: 'CallExpression' } ]
		},
		{
			code: '$div.die()',
			errors: [ { message: dieError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().die()',
			errors: [ { message: dieError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").die())',
			errors: [ { message: dieError, type: 'CallExpression' } ]
		}
	]
} );
