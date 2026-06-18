'use strict';

const rule = require( '../../src/rules/no-live' );
const RuleTester = require( '../../tools/rule-tester' );

const liveError = { messageId: 'live' };
const dieError = { messageId: 'die' };

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
		...[
			'$("div").live()',
			'$div.live()',
			'$("div").first().live()',
			'$("div").append($("input").live())'
		].map( ( code ) => ( { code, errors: [ liveError ] } ) ),
		...[
			'$("div").die()',
			'$div.die()',
			'$("div").first().die()',
			'$("div").append($("input").die())'
		].map( ( code ) => ( { code, errors: [ dieError ] } ) )
	]
} );
