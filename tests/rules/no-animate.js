'use strict';

const rule = require( '../../src/rules/no-animate' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer CSS transitions or CSS scroll-behaviour to .animate';
const errorNoScroll = 'Prefer CSS transitions to .animate';

const ruleTester = new RuleTester();
ruleTester.run( 'no-animate', rule, {
	valid: [
		'animate()',
		'[].animate()',
		'div.animate()',
		'div.animate',
		'stop()',
		'[].stop()',
		'div.stop()',
		'div.stop',
		'finish()',
		'[].finish()',
		'div.finish()',
		'div.finish',
		...[
			'$div.animate({scrollTop: 100})',
			'$div.animate({scrollLeft: 200})',
			'$div.animate({scrollTop: 100, scrollLeft: 200})',
			'$div.animate({scrollTop: 100}).stop()',
			'$div.animate({scrollTop: 100}).finish()'
		].map( ( code ) => ( { code, options: [ { allowScroll: true } ] } ) )
	],
	invalid: [
		...[
			'$("div").animate()',
			'$("div").stop()',
			'$("div").finish()',
			'$div.animate()',
			'$("div").first().animate()',
			'$("div").append($("input").animate())',
			'$div.animate({scrollTop: 100})',
			'$div.animate({scrollLeft: 200})',
			'$div.animate({scrollTop: 100, scrollLeft: 200})',
			'$div.animate({scrollTop: 100, width: 300})'
		].map( ( code ) => ( { code, errors: [ error ] } ) ),

		...[
			'$div.animate()',
			'$div.animate({scrollTop: 100, width: 300})'
		].map( ( code ) => ( {
			code,
			options: [ { allowScroll: true } ],
			errors: [ errorNoScroll ]
		} ) ),

		{
			code: '$div.animate({scrollTop: 100})',
			options: [ { allowScroll: false } ],
			errors: [ error ],
			docgen: false
		}
	]
} );
