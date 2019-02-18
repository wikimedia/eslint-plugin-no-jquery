'use strict';

const rule = require( '../rules/no-selector-prop' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = '$.selector is not allowed';

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
			errors: [ { message: error, type: 'MemberExpression' } ]
		},
		{
			code: '$div.selector',
			errors: [ { message: error, type: 'MemberExpression' } ]
		},
		{
			code: '$div.selector.prop',
			errors: [ { message: error, type: 'MemberExpression' } ]
		},
		{
			code: '$div.selector.method()',
			errors: [ { message: error, type: 'MemberExpression' } ]
		},
		{
			code: '$("div").first().selector',
			errors: [ { message: error, type: 'MemberExpression' } ]
		},
		{
			code: 'f($div.selector)',
			errors: [ { message: error, type: 'MemberExpression' } ]
		},
		{
			code: '$("div").append($("input").selector)',
			errors: [ { message: error, type: 'MemberExpression' } ]
		}
	]
} );
