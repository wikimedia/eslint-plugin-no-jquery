'use strict';

const rule = require( '../../src/rules/no-has' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '.has is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-has', rule, {
	valid: [ 'has()', '[].has()', 'div.has()', 'div.has' ],
	invalid: [
		'$("div").has()',
		'$div.has()',
		'$("div").first().has()',
		'$("div").append($("input").has())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
