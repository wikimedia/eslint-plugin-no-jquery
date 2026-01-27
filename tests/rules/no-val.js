'use strict';

const rule = require( '../../src/rules/no-val' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer HTMLInputElement#value to .val';

const ruleTester = new RuleTester();
ruleTester.run( 'no-val', rule, {
	valid: [ 'val()', '[].val()', 'div.val()', 'div.val' ],
	invalid: [
		'$("div").val()',
		'$div.val()',
		'$("div").first().val()',
		'$("div").append($("input").val())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
