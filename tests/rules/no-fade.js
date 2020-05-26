'use strict';

const rule = require( '../../src/rules/no-fade' );
const RuleTester = require( '../../tools/rule-tester' );

const inError = 'Prefer CSS transitions to .fadeIn';
const outError = 'Prefer CSS transitions to .fadeOut';
const toError = 'Prefer CSS transitions to .fadeTo';
const toggleError = 'Prefer CSS transitions to .fadeToggle';

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
		{
			code: '$("div").fadeIn()',
			errors: [ inError ]
		},
		{
			code: '$div.fadeIn()',
			errors: [ inError ]
		},
		{
			code: '$("div").first().fadeIn()',
			errors: [ inError ]
		},
		{
			code: '$("div").append($("input").fadeIn())',
			errors: [ inError ]
		},

		{
			code: '$("div").fadeOut()',
			errors: [ outError ]
		},
		{
			code: '$div.fadeOut()',
			errors: [ outError ]
		},
		{
			code: '$("div").first().fadeOut()',
			errors: [ outError ]
		},
		{
			code: '$("div").append($("input").fadeOut())',
			errors: [ outError ]
		},

		{
			code: '$("div").fadeTo()',
			errors: [ toError ]
		},
		{
			code: '$div.fadeTo()',
			errors: [ toError ]
		},
		{
			code: '$("div").first().fadeTo()',
			errors: [ toError ]
		},
		{
			code: '$("div").append($("input").fadeTo())',
			errors: [ toError ]
		},

		{
			code: '$("div").fadeToggle()',
			errors: [ toggleError ]
		},
		{
			code: '$div.fadeToggle()',
			errors: [ toggleError ]
		},
		{
			code: '$("div").first().fadeToggle()',
			errors: [ toggleError ]
		},
		{
			code: '$("div").append($("input").fadeToggle())',
			errors: [ toggleError ]
		}
	]
} );
