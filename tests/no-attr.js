'use strict';

const rule = require( '../rules/no-attr' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const getError = 'Prefer Element#getAttribute to attr';
const setError = 'Prefer Element#setAttribute to attr';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-attr', rule, {
	valid: [ 'attr()', '[].attr()', 'div.attr()', 'div.attr' ],
	invalid: [
		{
			code: '$.attr()',
			errors: [ { message: getError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").attr()',
			errors: [ { message: getError, type: 'CallExpression' } ]
		},
		{
			code: '$div.attr()',
			errors: [ { message: getError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().attr()',
			errors: [ { message: getError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").attr())',
			errors: [ { message: getError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").attr("name")',
			errors: [ { message: getError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").attr("name", "random")',
			errors: [ { message: setError, type: 'CallExpression' } ]
		}
	]
} );
