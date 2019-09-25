'use strict';

const rule = require( '../rules/no-sub' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = '$.sub is not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-sub', rule, {
	valid: [ 'sub()', '"test".sub()', '"test".sub' ],
	invalid: [
		{
			code: '$.sub()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
