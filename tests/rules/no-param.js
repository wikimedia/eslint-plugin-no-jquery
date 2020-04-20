'use strict';

const rule = require( '../../src/rules/no-param' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

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
