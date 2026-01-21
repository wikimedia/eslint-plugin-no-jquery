'use strict';

const rule = require( '../../src/rules/no-each-util' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Array#forEach to $.each';

const ruleTester = new RuleTester();
ruleTester.run( 'no-each-util', rule, {
	valid: [
		'each()',
		'[].each()',
		'div.each()',
		'div.each',
		'$("div").each()',
		'$div.each()',
		'$("div").first().each()',
		'$("div").append($("input").each())'
	],
	invalid: [
		'$.each()'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
