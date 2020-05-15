'use strict';

const rule = require( '../../src/rules/no-browser' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '$.browser is not allowed';

const ruleTester = new RuleTester();
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
