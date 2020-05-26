'use strict';

const rule = require( '../../src/rules/no-wrap' );
const RuleTester = require( '../../tools/rule-tester' );

const wrapError = '.wrap is not allowed';
const wrapAllError = '.wrapAll is not allowed';
const wrapInnerError = '.wrapInner is not allowed';
const unwrapError = '.unwrap is not allowed';

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
		{
			code: '$("div").wrap()',
			errors: [ wrapError ]
		},
		{
			code: '$div.wrap()',
			errors: [ wrapError ]
		},
		{
			code: '$("div").first().wrap()',
			errors: [ wrapError ]
		},
		{
			code: '$("div").append($("input").wrap())',
			errors: [ wrapError ]
		},
		{
			code: '$("div").wrapAll()',
			errors: [ wrapAllError ]
		},
		{
			code: '$div.wrapAll()',
			errors: [ wrapAllError ]
		},
		{
			code: '$("div").first().wrapAll()',
			errors: [ wrapAllError ]
		},
		{
			code: '$("div").append($("input").wrapAll())',
			errors: [ wrapAllError ]
		},
		{
			code: '$("div").wrapInner()',
			errors: [ wrapInnerError ]
		},
		{
			code: '$div.wrapInner()',
			errors: [ wrapInnerError ]
		},
		{
			code: '$("div").first().wrapInner()',
			errors: [ wrapInnerError ]
		},
		{
			code: '$("div").append($("input").wrapInner())',
			errors: [ wrapInnerError ]
		},
		{
			code: '$("div").unwrap()',
			errors: [ unwrapError ]
		},
		{
			code: '$div.unwrap()',
			errors: [ unwrapError ]
		},
		{
			code: '$("div").first().unwrap()',
			errors: [ unwrapError ]
		},
		{
			code: '$("div").append($("input").unwrap())',
			errors: [ unwrapError ]
		}
	]
} );
