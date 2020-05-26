'use strict';

const rule = require( '../../src/rules/no-hold-ready' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '$.holdReady is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-hold-ready', rule, {
	valid: [ 'holdReady()', '"test".holdReady()', '"test".holdReady' ],
	invalid: [
		{
			code: '$.holdReady()',
			errors: [ error ]
		}
	]
} );
