'use strict';

const rule = require( '../rules/no-data' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer WeakMap to data';
const removeError = 'Prefer WeakMap to removeData';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-data', rule, {
	valid: [
		'data()',
		'[].data()',
		'div.data()',
		'div.data',

		'removeData()',
		'[].removeData()',
		'div.removeData()',
		'div.removeData'
	],
	invalid: [
		{
			code: '$.data()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").data()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.data()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().data()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").data())',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").removeData()',
			errors: [ { message: removeError, type: 'CallExpression' } ]
		},
		{
			code: '$div.removeData()',
			errors: [ { message: removeError, type: 'CallExpression' } ]
		}
	]
} );
