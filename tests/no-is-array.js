'use strict';

const rule = require( '../rules/no-is-array' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer Array#isArray to $.isArray';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-is-array', rule, {
	valid: [ 'isArray()', '"test".isArray()', '"test".isArray' ],
	invalid: [
		{
			code: '$.isArray()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
