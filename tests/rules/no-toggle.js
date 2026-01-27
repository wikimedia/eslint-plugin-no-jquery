'use strict';

const rule = require( '../../src/rules/no-toggle' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '.toggle is not allowed. This rule is deprecated, use no-visibility.';

const ruleTester = new RuleTester();
ruleTester.run( 'no-toggle', rule, {
	valid: [ 'toggle()', '[].toggle()', 'div.toggle()', 'div.toggle' ],
	invalid: [
		'$("div").toggle()',
		'$div.toggle()',
		'$("div").first().toggle()',
		'$("div").append($("input").toggle())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
