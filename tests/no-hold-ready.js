'use strict';

const rule = require( '../rules/no-hold-ready' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = '$.holdReady is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-holdReady', rule, {
	valid: [ 'holdReady()', '"test".holdReady()', '"test".holdReady' ],
	invalid: [
		{
			code: '$.holdReady()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
