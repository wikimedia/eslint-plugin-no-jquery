'use strict';

const rule = require( '../../src/rules/no-parent' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Node#parentElement to .parent';

const ruleTester = new RuleTester();
ruleTester.run( 'no-parent', rule, {
	valid: [ 'parent()', '[].parent()', 'div.parent()', 'div.parent' ],
	invalid: [
		'$("div").parent()',
		'$div.parent()',
		'$("div").first().parent()',
		'$("div").append($("input").parent())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
