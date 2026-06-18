'use strict';

const rule = require( '../../src/rules/no-map-util' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-map-util', rule, {
	valid: [
		'map()',
		'[].map()',
		'div.map()',
		'div.map',
		'$("div").map()',
		'$div.map()',
		'$("div").first().map()',
		'$("div").append($("input").map())',
		'$("select").val().map()'
	],
	invalid: [
		'$.map()'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
