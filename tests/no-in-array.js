'use strict';

const rule = require( '../rules/no-in-array' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer Array#indexOf to $.inArray';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-in-array', rule, {
	valid: [ 'inArray()', '"test".inArray()', '"test".inArray' ],
	invalid: [
		{
			code: '$.inArray()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
