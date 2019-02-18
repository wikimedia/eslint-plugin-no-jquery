'use strict';

const rule = require( '../rules/no-sub' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = '$.sub is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-sub', rule, {
	valid: [ 'sub()', '"test".sub()', '"test".sub' ],
	invalid: [
		{
			code: '$.sub()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
