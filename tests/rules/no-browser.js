'use strict';

const rule = require( '../../src/rules/no-browser' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = '$.browser is not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-browser', rule, {
	valid: [ 'browser', 'a.browser', 'browser.foo', 'a.browser.foo', '$.browsers' ],
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
