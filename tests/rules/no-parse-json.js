'use strict';

const rule = require( '../../src/rules/no-parse-json' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer JSON.parse to $.parseJSON';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-parse-json', rule, {
	valid: [ 'parseJSON()', '$div.parseJSON()', '"test".parseJSON' ],
	invalid: [
		{
			code: '$.parseJSON("{}")',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: 'JSON.parse("{}")'
		}
	]
} );
