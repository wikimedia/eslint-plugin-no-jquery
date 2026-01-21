'use strict';

const rule = require( '../../src/rules/no-bind' );
const RuleTester = require( '../../tools/rule-tester' );

const bindError = 'Prefer .on/EventTarget#addEventListener to .bind';
const unbindError = 'Prefer .off/EventTarget#removeEventListener to .unbind';

const ruleTester = new RuleTester();
ruleTester.run( 'no-bind', rule, {
	valid: [
		'bind()',
		'[].bind()',
		'div.bind()',
		'div.bind',
		'$div.remove.bind($div)',

		'unbind()',
		'[].unbind()',
		'div.unbind()',
		'div.unbind',
		'$div.remove.unbind($div)'
	],
	invalid: [
		...[
			'$("div").bind()',
			'$div.bind()',
			'$("div").first().bind()',
			'$("div").append($("input").bind())'
		].map( ( code ) => ( { code, errors: [ bindError ] } ) ),
		...[
			'$("div").unbind()',
			'$div.unbind()',
			'$("div").first().unbind()',
			'$("div").append($("input").unbind())'
		].map( ( code ) => ( { code, errors: [ unbindError ] } ) )
	]
} );
