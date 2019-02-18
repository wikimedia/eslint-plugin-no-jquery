'use strict';

const rule = require( '../rules/no-support' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = '$.support is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-noop', rule, {
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
