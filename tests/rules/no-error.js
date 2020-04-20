'use strict';

const rule = require( '../../src/rules/no-error' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer throw to $.error';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-error', rule, {
	valid: [ 'nodeName()', 'myClass.nodeName()', '$div.nodeName()' ],
	invalid: [
		{
			code: '$.error()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
