'use strict';

const rule = require( '../rules/no-type' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer typeof/instanceof to $.type';

const ruleTester = new RuleTester();
ruleTester.run( 'no-extend', rule, {
	valid: [ 'type()', 'myMethod.type()', 'myMethod.type' ],
	invalid: [
		{
			code: '$.type()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
