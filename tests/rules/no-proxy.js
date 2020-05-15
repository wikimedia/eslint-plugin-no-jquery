'use strict';

const rule = require( '../../src/rules/no-proxy' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Function#bind to $.proxy';

const ruleTester = new RuleTester();
ruleTester.run( 'no-proxy', rule, {
	valid: [ 'proxy()', '"test".proxy()', '"test".proxy' ],
	invalid: [
		{
			code: '$.proxy()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
