'use strict';

const rule = require( '../rules/no-serialize' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const serializeError = 'Prefer FormData or URLSearchParams to $.serialize';
const arrayError = 'Prefer FormData or URLSearchParams to $.serializeArray';

const ruleTester = new RuleTesterAndDocs();
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
			errors: [ { message: serializeError, type: 'CallExpression' } ]
		},
		{
			code: '$div.serialize()',
			errors: [ { message: serializeError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().serialize()',
			errors: [ { message: serializeError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").serialize())',
			errors: [ { message: serializeError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").serializeArray()',
			errors: [ { message: arrayError, type: 'CallExpression' } ]
		},
		{
			code: '$div.serializeArray()',
			errors: [ { message: arrayError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().serializeArray()',
			errors: [ { message: arrayError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").serializeArray())',
			errors: [ { message: arrayError, type: 'CallExpression' } ]
		}
	]
} );
