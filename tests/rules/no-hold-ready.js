'use strict';

const rule = require( '../../src/rules/no-hold-ready' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = '$.holdReady is not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-hold-ready', rule, {
	valid: [ 'holdReady()', '"test".holdReady()', '"test".holdReady' ],
	invalid: [
		{
			code: '$.holdReady()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
