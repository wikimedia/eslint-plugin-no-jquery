'use strict';

const rule = require( '../rules/no-parse-json' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer JSON.parse to $.parseJSON';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-parse-json', rule, {
	valid: [ 'parseJSON()', '"test".parseJSON()', '"test".parseJSON' ],
	invalid: [
		{
			code: '$.parseJSON()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
