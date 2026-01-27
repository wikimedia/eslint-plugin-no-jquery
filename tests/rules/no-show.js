'use strict';

const rule = require( '../../src/rules/no-show' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '.show is not allowed. This rule is deprecated, use no-visibility.';

const ruleTester = new RuleTester();
ruleTester.run( 'no-show', rule, {
	valid: [ 'show()', '[].show()', 'div.show()', 'div.show' ],
	invalid: [
		'$("div").show()',
		'$div.show()',
		'$("div").first().show()',
		'$("div").append($("input").show())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
