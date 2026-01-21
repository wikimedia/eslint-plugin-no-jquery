'use strict';

const rule = require( '../../src/rules/no-text' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Node#textContent to .text/$.text';

const ruleTester = new RuleTester();
ruleTester.run( 'no-text', rule, {
	valid: [ 'text()', '[].text()', 'div.text()', 'div.text' ],
	invalid: [
		'$.text()',
		'$("div").text()',
		'$div.text()',
		'$("div").first().text()',
		'$("div").append($("input").text())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
