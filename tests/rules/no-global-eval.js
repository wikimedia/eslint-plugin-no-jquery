'use strict';

const rule = require( '../../src/rules/no-global-eval' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '$.globalEval is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-global-eval', rule, {
	valid: [ 'globalEval()', '"test".globalEval()', '"test".globalEval' ],
	invalid: [
		{
			code: '$.globalEval()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
