'use strict';

const rule = require( '../../src/rules/no-merge' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer Array#concat to $.merge';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-merge', rule, {
	valid: [ 'merge()', '"test".merge()', '"test".merge' ],
	invalid: [
		{
			code: '$.merge()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
