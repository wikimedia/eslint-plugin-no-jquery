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
		{
			code: '$("div").selector',
			errors: [ error ]
		},
		{
			code: '$div.selector',
			errors: [ error ]
		},
		{
			code: '$div.selector.prop',
			errors: [ error ]
		},
		{
			code: '$div.selector.method()',
			errors: [ error ]
		},
		{
			code: '$("div").first().selector',
			errors: [ error ]
		},
		{
			code: 'f($div.selector)',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").selector)',
			errors: [ error ]
		}
	]
} );
