'use strict';

const rule = require( '../rules/no-context-prop' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = '$.context is not allowed';

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
			errors: [ { message: error, type: 'MemberExpression' } ]
		},
		{
			code: '$div.context',
			errors: [ { message: error, type: 'MemberExpression' } ]
		},
		{
			code: '$div.context.prop',
			errors: [ { message: error, type: 'MemberExpression' } ]
		},
		{
			code: '$div.context.method()',
			errors: [ { message: error, type: 'MemberExpression' } ]
		},
		{
			code: '$("div").first().context',
			errors: [ { message: error, type: 'MemberExpression' } ]
		},
		{
			code: 'f($div.context)',
			errors: [ { message: error, type: 'MemberExpression' } ]
		},
		{
			code: '$("div").append($("input").context)',
			errors: [ { message: error, type: 'MemberExpression' } ]
		}
	]
} );
