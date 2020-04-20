'use strict';

const rule = require( '../../src/rules/no-is-array' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer Array.isArray to $.isArray';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-is-array', rule, {
	valid: [ 'isArray()', '"test".isArray()', '"test".isArray' ],
	invalid: [
		{
			code: '$.isArray( [] )',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: 'Array.isArray( [] )'
		}
	]
} );
