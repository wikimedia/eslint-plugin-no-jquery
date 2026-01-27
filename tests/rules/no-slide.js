'use strict';

const rule = require( '../../src/rules/no-slide' );
const RuleTester = require( '../../tools/rule-tester' );

const downError = 'Prefer CSS transitions to .slideDown';
const toggleError = 'Prefer CSS transitions to .slideToggle';
const upError = 'Prefer CSS transitions to .slideUp';

const ruleTester = new RuleTester();
ruleTester.run( 'no-slide', rule, {
	valid: [
		'slideDown()',
		'[].slideDown()',
		'div.slideDown()',
		'div.slideDown',

		'slideToggle()',
		'[].slideToggle()',
		'div.slideToggle()',
		'div.slideToggle',

		'slideUp()',
		'[].slideUp()',
		'div.slideUp()',
		'div.slideUp'
	],
	invalid: [
		...[
			'$("div").slideDown()',
			'$div.slideDown()',
			'$("div").first().slideDown()',
			'$("div").append($("input").slideDown())'
		].map( ( code ) => ( { code, errors: [ downError ] } ) ),
		...[
			'$("div").slideToggle()',
			'$div.slideToggle()',
			'$("div").first().slideToggle()',
			'$("div").append($("input").slideToggle())'
		].map( ( code ) => ( { code, errors: [ toggleError ] } ) ),
		...[
			'$("div").slideUp()',
			'$div.slideUp()',
			'$("div").first().slideUp()',
			'$("div").append($("input").slideUp())'
		].map( ( code ) => ( { code, errors: [ upError ] } ) )
	]
} );
