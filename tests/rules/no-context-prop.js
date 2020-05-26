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
		{
			code: '$("div").context',
			errors: [ error ]
		},
		{
			code: '$div.context',
			errors: [ error ]
		},
		{
			code: '$div.context.prop',
			errors: [ error ]
		},
		{
			code: '$div.context.method()',
			errors: [ error ]
		},
		{
			code: '$("div").first().context',
			errors: [ error ]
		},
		{
			code: 'f($div.context)',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").context)',
			errors: [ error ]
		}
	]
} );
