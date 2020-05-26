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
		{
			code: '$("div").slideDown()',
			errors: [ downError ]
		},
		{
			code: '$div.slideDown()',
			errors: [ downError ]
		},
		{
			code: '$("div").first().slideDown()',
			errors: [ downError ]
		},
		{
			code: '$("div").append($("input").slideDown())',
			errors: [ downError ]
		},

		{
			code: '$("div").slideToggle()',
			errors: [ toggleError ]
		},
		{
			code: '$div.slideToggle()',
			errors: [ toggleError ]
		},
		{
			code: '$("div").first().slideToggle()',
			errors: [ toggleError ]
		},
		{
			code: '$("div").append($("input").slideToggle())',
			errors: [ toggleError ]
		},

		{
			code: '$("div").slideUp()',
			errors: [ upError ]
		},
		{
			code: '$div.slideUp()',
			errors: [ upError ]
		},
		{
			code: '$("div").first().slideUp()',
			errors: [ upError ]
		},
		{
			code: '$("div").append($("input").slideUp())',
			errors: [ upError ]
		}
	]
} );
