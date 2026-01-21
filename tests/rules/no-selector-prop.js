'use strict';

const rule = require( '../../src/rules/no-selector-prop' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '.selector is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-selector-prop', rule, {
	valid: [
		'selector',
		'div.selector',
		'$div.prop.selector',
		'$div.selector()',
		'$div.selector(arg)'
	],
	invalid: [
		'$("div").selector',
		'$div.selector',
		'$div.selector.prop',
		'$div.selector.method()',
		'$("div").first().selector',
		'f($div.selector)',
		'$("div").append($("input").selector)'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
