'use strict';

const rule = require( '../../src/rules/no-closest' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Element#closest to .closest';

const ruleTester = new RuleTester();
ruleTester.run( 'no-closest', rule, {
	valid: [ 'closest()', '[].closest()', 'div.closest()', 'div.closest' ],
	invalid: [
		'$("div").closest()',
		'$div.closest()',
		'$("div").first().closest()',
		'$("div").append($("input").closest())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
