'use strict';

const rule = require( '../rules/no-param' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer FormData or URLSearchParams to $.param';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-param', rule, {
	valid: [ 'param()', '"test".param()', '"test".param' ],
	invalid: [
		{
			code: '$.param()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
