'use strict';

const rule = require( '../../src/rules/no-now' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

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
