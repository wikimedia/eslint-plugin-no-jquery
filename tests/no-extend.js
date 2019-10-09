'use strict';

const rule = require( '../rules/no-extend' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer Object.assign or the spread operator to $.extend';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-extend', rule, {
	valid: [
		'extend()',
		'myMethod.extend()',
		'myMethod.extend',
		{
			code: '$.extend(true, {}, foo)',
			options: [ { allowDeep: true } ]
		}
	],
	invalid: [
		{
			code: '$.extend({}, foo)',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$.extend(true, {}, foo)',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$.extend({}, foo)',
			errors: [ { message: error, type: 'CallExpression' } ],
			options: [ { allowDeep: true } ]
		}
	]
} );
