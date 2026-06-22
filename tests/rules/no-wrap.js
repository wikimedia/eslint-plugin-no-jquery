'use strict';

const rule = require( '../../src/rules/no-wrap' );
const RuleTester = require( '../../tools/rule-tester' );

const wrapError = { messageId: 'default', data: { name: 'wrap' } };
const wrapAllError = { messageId: 'default', data: { name: 'wrapAll' } };
const wrapInnerError = { messageId: 'default', data: { name: 'wrapInner' } };
const unwrapError = { messageId: 'default', data: { name: 'unwrap' } };

const ruleTester = new RuleTester();
ruleTester.run( 'no-wrap', rule, {
	valid: [
		'wrap()',
		'[].wrap()',
		'div.wrap()',
		'div.wrap',

		'wrapAll()',
		'[].wrapAll()',
		'div.wrapAll()',
		'div.wrapAll',

		'wrapInner()',
		'[].wrapInner()',
		'div.wrapInner()',
		'div.wrapInner',

		'unwrap()',
		'[].unwrap()',
		'div.unwrap()',
		'div.unwrap'
	],
	invalid: [
		...[
			'$("div").wrap()',
			'$div.wrap()',
			'$("div").first().wrap()',
			'$("div").append($("input").wrap())'
		].map( ( code ) => ( { code, errors: [ wrapError ] } ) ),
		...[
			'$("div").wrapAll()',
			'$div.wrapAll()',
			'$("div").first().wrapAll()',
			'$("div").append($("input").wrapAll())'
		].map( ( code ) => ( { code, errors: [ wrapAllError ] } ) ),
		...[
			'$("div").wrapInner()',
			'$div.wrapInner()',
			'$("div").first().wrapInner()',
			'$("div").append($("input").wrapInner())'
		].map( ( code ) => ( { code, errors: [ wrapInnerError ] } ) ),
		...[
			'$("div").unwrap()',
			'$div.unwrap()',
			'$("div").first().unwrap()',
			'$("div").append($("input").unwrap())'
		].map( ( code ) => ( { code, errors: [ unwrapError ] } ) )
	]
} );
