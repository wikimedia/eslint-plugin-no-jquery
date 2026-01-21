'use strict';

const rule = require( '../../src/rules/no-is' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Element#matches to .is';

const ruleTester = new RuleTester();
ruleTester.run( 'no-is', rule, {
	valid: [ 'is()', '[].is()', 'div.is()', 'div.is' ],
	invalid: [
		'$("div").is()',
		'$div.is()',
		'$("div").first().is()',
		'$("div").append($("input").is())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
