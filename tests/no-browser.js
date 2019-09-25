'use strict';

const rule = require( '../rules/no-browser' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = '$.browser is not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-browser', rule, {
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
