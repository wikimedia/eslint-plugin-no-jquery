'use strict';

const rule = require( '../../src/rules/no-class-state' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Where possible, maintain application state in JS to avoid slower DOM queries';

const ruleTester = new RuleTester();
ruleTester.run( 'no-class-state', rule, {
	valid: [
		'hasClass()',
		'[].hasClass()',
		'div.hasClass()',
		'div.hasClass',

		'toggleClass()',
		'[].toggleClass()',
		'div.toggleClass()',
		'div.toggleClass',

		// These are equivalent to addClass/removeClass and so
		// don't query the DOM for state information.
		'$div.toggleClass("myClass", true)',
		'$div.toggleClass("myClass", false)'
	],
	invalid: [
		'$("div").hasClass()',
		'$div.hasClass()',
		'$("div").first().hasClass()',
		'$("div").append($("input").hasClass())',
		'$("div").toggleClass("myClass")',
		'$div.toggleClass("myClass")',
		'$("div").first().toggleClass("myClass")',
		'$("div").append($("input").toggleClass("myClass"))'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
