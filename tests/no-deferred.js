'use strict';

const rule = require( '../rules/no-deferred' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer Promise to $.Deferred';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-deferred', rule, {
	valid: [
		'Deferred()',
		'new Deferred()',
		'"test".Deferred()',
		'"test".Deferred'
	],
	invalid: [
		{
			code: '$.Deferred()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: 'new $.Deferred()',
			errors: [ { message: error, type: 'NewExpression' } ]
		}
	]
} );
