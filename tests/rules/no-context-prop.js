'use strict';

const rule = require( '../../src/rules/no-context-prop' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '.context is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-context-prop', rule, {
	valid: [
		'context',
		'div.context',
		'$div.prop.context',
		'$div.context()',
		'$div.context(arg)'
	],
	invalid: [
		'$("div").context',
		'$div.context',
		'$div.context.prop',
		'$div.context.method()',
		'$("div").first().context',
		'f($div.context)',
		'$("div").append($("input").context)'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
