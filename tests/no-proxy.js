'use strict';

const rule = require( '../rules/no-proxy' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer Function#bind to $.proxy';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-proxy', rule, {
	valid: [ 'proxy()', '"test".proxy()', '"test".proxy' ],
	invalid: [
		{
			code: '$.proxy()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
