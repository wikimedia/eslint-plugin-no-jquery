'use strict';

const rule = require( '../../src/rules/no-when' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer Promise.all to $.when';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-when', rule, {
	valid: [ 'When()', 'new When()', '"test".when()', '"test".when', '$when()' ],
	invalid: [
		{
			code: '$.when(a,b)',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
