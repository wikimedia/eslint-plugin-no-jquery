'use strict';

const rule = require( '../rules/no-noop' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer function() {} to $.noop';

const ruleTester = new RuleTester();
ruleTester.run( 'no-noop', rule, {
	valid: [ 'foo.noop', 'foo.noop()', 'foo.noop(bar)' ],
	invalid: [
		{
			code: '$.noop',
			errors: [ { message: error, type: 'MemberExpression' } ]
		},
		{
			code: '$.noop()',
			errors: [ { message: error, type: 'MemberExpression' } ]
		}
	]
} );
