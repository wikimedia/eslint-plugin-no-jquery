'use strict';

const rule = require( '../rules/no-is-window' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = '$.isWindow is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-is-window', rule, {
	valid: [ 'isWindow()', 'myClass.isWindow()' ],
	invalid: [
		{
			code: '$.isWindow()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
