'use strict';

const rule = require( '../../src/rules/no-serialize' );
const RuleTester = require( '../../tools/rule-tester' );

const serializeError = 'Prefer FormData or URLSearchParams to .serialize';
const arrayError = 'Prefer FormData or URLSearchParams to .serializeArray';

const ruleTester = new RuleTester();
ruleTester.run( 'no-serialize', rule, {
	valid: [
		'serialize()',
		'[].serialize()',
		'div.serialize()',
		'div.serialize',

		'serializeArray()',
		'[].serializeArray()',
		'div.serializeArray()',
		'div.serializeArray'
	],
	invalid: [
		{
			code: '$("div").serialize()',
			errors: [ serializeError ]
		},
		{
			code: '$div.serialize()',
			errors: [ serializeError ]
		},
		{
			code: '$("div").first().serialize()',
			errors: [ serializeError ]
		},
		{
			code: '$("div").append($("input").serialize())',
			errors: [ serializeError ]
		},
		{
			code: '$("div").serializeArray()',
			errors: [ arrayError ]
		},
		{
			code: '$div.serializeArray()',
			errors: [ arrayError ]
		},
		{
			code: '$("div").first().serializeArray()',
			errors: [ arrayError ]
		},
		{
			code: '$("div").append($("input").serializeArray())',
			errors: [ arrayError ]
		}
	]
} );
