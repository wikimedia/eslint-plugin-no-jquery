'use strict';

const rule = require( '../../src/rules/no-animate-toggle' );
const RuleTester = require( '../../tools/rule-tester' );

const showError = 'Prefer CSS transitions to .show';
const hideError = 'Prefer CSS transitions to .hide';
const toggleError = 'Prefer CSS transitions to .toggle';

const ruleTester = new RuleTester();
ruleTester.run( 'no-animate-toggle', rule, {
	valid: [
		'$div.show()',
		'$("div").show()',
		'$("div").show',
		'$.show("fast")',

		'$div.toggle()',
		'$("div").toggle()',
		'$("div").toggle',

		'$div.toggle(false)',
		'$div.toggle(true)',
		'$div.toggle(variableCouldBeBoolean)',
		'$div.toggle(!!"0")',
		'$div.toggle(getBoolean())'
	],
	invalid: [
		{
			code: '$("div").show("fast")',
			errors: [ showError ]
		},
		{
			code: '$div.show(500)',
			errors: [ showError ]
		},
		{
			code: '$("div").first().show({duration:"slow"})',
			errors: [ showError ]
		},
		{
			code: '$("div").append($("input").show({duration:"slow"}))',
			errors: [ showError ]
		},

		{
			code: '$("div").hide("fast")',
			errors: [ hideError ]
		},
		{
			code: '$div.hide(500)',
			errors: [ hideError ]
		},
		{
			code: '$("div").first().hide({duration:"slow"})',
			errors: [ hideError ]
		},
		{
			code: '$("div").append($("input").hide({duration:"slow"}))',
			errors: [ hideError ]
		},

		{
			code: '$("div").toggle("fast")',
			errors: [ toggleError ]
		},
		{
			code: '$div.toggle(500)',
			errors: [ toggleError ]
		},
		{
			code: '$("div").first().toggle({duration:"slow"})',
			errors: [ toggleError ]
		},
		{
			code: '$("div").append($("input").toggle({duration:"slow"}))',
			errors: [ toggleError ]
		}
	]
} );
