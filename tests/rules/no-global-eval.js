'use strict';

const rule = require( '../../src/rules/no-global-eval' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = '$.globalEval is not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-global-eval', rule, {
	valid: [ 'globalEval()', '"test".globalEval()', '"test".globalEval' ],
	invalid: [
		{
			code: '$.globalEval()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
