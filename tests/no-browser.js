'use strict';

const rule = require( '../rules/no-browser' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = '$.browser is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-noop', rule, {
	valid: [ 'browser', 'a.browser', 'browser.foo', 'a.browser.foo' ],
	invalid: [
		{
			code: '$.browser',
			errors: [ { message: error, type: 'MemberExpression' } ]
		},
		{
			code: '$.browser.style',
			errors: [ { message: error, type: 'MemberExpression' } ]
		}
	]
} );
