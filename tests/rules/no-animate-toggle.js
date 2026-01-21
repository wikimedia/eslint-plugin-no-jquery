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
		...[
			'$("div").show("fast")',
			'$div.show(500)',
			'$("div").first().show({duration:"slow"})',
			'$("div").append($("input").show({duration:"slow"}))'
		].map( ( code ) => ( { code, errors: [ showError ] } ) ),
		...[
			'$("div").hide("fast")',
			'$div.hide(500)',
			'$("div").first().hide({duration:"slow"})',
			'$("div").append($("input").hide({duration:"slow"}))'
		].map( ( code ) => ( { code, errors: [ hideError ] } ) ),

		...[
			'$("div").toggle("fast")',
			'$div.toggle(500)',
			'$("div").first().toggle({duration:"slow"})',
			'$("div").append($("input").toggle({duration:"slow"}))'
		].map( ( code ) => ( { code, errors: [ toggleError ] } ) )
	]
} );
