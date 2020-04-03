'use strict';

const rule = require( '../rules/no-filter' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer Array#filter to .filter/$.filter';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-filter', rule, {
	valid: [ 'filter()', '[].filter()', 'div.filter()', 'div.filter' ],
	invalid: [
		{
			code: '$.filter()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").filter()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.filter()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().filter()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").filter())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
