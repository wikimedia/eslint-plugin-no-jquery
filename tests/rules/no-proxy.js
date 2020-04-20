'use strict';

const rule = require( '../../src/rules/no-proxy' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

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
