'use strict';

const rule = require( '../../src/rules/no-support' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '$.support is not allowed';

const ruleTester = new RuleTester();
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
