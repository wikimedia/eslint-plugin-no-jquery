'use strict';

const rule = require( '../../src/rules/no-css' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Window#getComputedStyle to .css/$.css';

const ruleTester = new RuleTester();
ruleTester.run( 'no-css', rule, {
	valid: [ 'css()', '[].css()', 'div.css()', 'div.css' ],
	invalid: [
		'$.css()',
		'$("div").css()',
		'$div.css()',
		'$("div").first().css()',
		'$("div").append($("input").css())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
