'use strict';

const rule = require( '../rules/no-parse-json' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer JSON.parse to $.parseJSON';

const ruleTester = new RuleTester();
ruleTester.run( 'no-parse-json', rule, {
	valid: [ 'parseJSON()', '"test".parseJSON()', '"test".parseJSON' ],
	invalid: [
		{
			code: '$.parseJSON()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
