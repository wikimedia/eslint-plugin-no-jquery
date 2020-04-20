'use strict';

const rule = require( '../../src/rules/no-type' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer typeof/instanceof to $.type';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-type', rule, {
	valid: [ 'type()', 'myMethod.type()', 'myMethod.type' ],
	invalid: [
		{
			code: '$.type()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
