'use strict';

const rule = require( '../../src/rules/no-fade' );
const RuleTester = require( '../../tools/rule-tester' );

const inError = { messageId: 'default', data: { name: 'fadeIn' } };
const outError = { messageId: 'default', data: { name: 'fadeOut' } };
const toError = { messageId: 'default', data: { name: 'fadeTo' } };
const toggleError = { messageId: 'default', data: { name: 'fadeToggle' } };

const ruleTester = new RuleTester();
ruleTester.run( 'no-fade', rule, {
	valid: [
		'fadeIn()',
		'[].fadeIn()',
		'div.fadeIn()',
		'div.fadeIn',

		'fadeOut()',
		'[].fadeOut()',
		'div.fadeOut()',
		'div.fadeOut',

		'fadeTo()',
		'[].fadeTo()',
		'div.fadeTo()',
		'div.fadeTo',

		'fadeToggle()',
		'[].fadeToggle()',
		'div.fadeToggle()',
		'div.fadeToggle'
	],
	invalid: [
		...[
			'$("div").fadeIn()',
			'$div.fadeIn()',
			'$("div").first().fadeIn()',
			'$("div").append($("input").fadeIn())'
		].map( ( code ) => ( { code, errors: [ inError ] } ) ),
		...[
			'$("div").fadeOut()',
			'$div.fadeOut()',
			'$("div").first().fadeOut()',
			'$("div").append($("input").fadeOut())'
		].map( ( code ) => ( { code, errors: [ outError ] } ) ),
		...[
			'$("div").fadeTo()',
			'$div.fadeTo()',
			'$("div").first().fadeTo()',
			'$("div").append($("input").fadeTo())'
		].map( ( code ) => ( { code, errors: [ toError ] } ) ),
		...[
			'$("div").fadeToggle()',
			'$div.fadeToggle()',
			'$("div").first().fadeToggle()',
			'$("div").append($("input").fadeToggle())'
		].map( ( code ) => ( { code, errors: [ toggleError ] } ) )
	]
} );
