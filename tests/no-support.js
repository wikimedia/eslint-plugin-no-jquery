'use strict';

const rule = require( '../rules/no-support' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = '$.support is not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-support', rule, {
	valid: [ 'support', 'a.support', 'support.foo', 'a.support.foo' ],
	invalid: [
		{
			code: '$.support',
			errors: [ { message: error, type: 'MemberExpression' } ]
		},
		{
			code: '$.support.style',
			errors: [ { message: error, type: 'MemberExpression' } ]
		}
	]
} );
