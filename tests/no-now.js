'use strict';

const rule = require( '../rules/no-now' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer (new Date).getTime() to $.now';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-now', rule, {
	valid: [ 'now()', 'myClass.now()', '$div.now()' ],
	invalid: [
		{
			code: '$.now()',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: 'Date.now()'
		}
	]
} );
