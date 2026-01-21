'use strict';

const rule = require( '../../src/rules/no-parents' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Element#closest to .parents';

const ruleTester = new RuleTester();
ruleTester.run( 'no-parents', rule, {
	valid: [ 'parents()', '[].parents()', 'div.parents()', 'div.parents' ],
	invalid: [
		'$("div").parents()',
		'$div.parents()',
		'$("div").first().parents()',
		'$("div").append($("input").parents())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
