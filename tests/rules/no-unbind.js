'use strict';

const rule = require( '../../src/rules/no-unbind' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer .off/EventTarget#removeEventListener to .unbind. This rule is deprecated, use no-bind.';

const ruleTester = new RuleTester();
ruleTester.run( 'no-unbind', rule, {
	valid: [ 'unbind()', '[].unbind()', 'div.unbind()', 'div.unbind' ],
	invalid: [
		'$("div").unbind()',
		'$div.unbind()',
		'$("div").first().unbind()',
		'$("div").append($("input").unbind())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
