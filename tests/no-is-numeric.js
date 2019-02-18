'use strict';

const rule = require( '../rules/no-is-numeric' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer typeof to $.isNumeric';

const ruleTester = new RuleTester();
ruleTester.run( 'no-is-numeric', rule, {
	valid: [ 'isNumeric()', 'myClass.isNumeric()', '$div.isNumeric()' ],
	invalid: [
		{
			code: '$.isNumeric()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
