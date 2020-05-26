'use strict';

const rule = require( '../../src/rules/no-type' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer typeof/instanceof to $.type';

const ruleTester = new RuleTester();
ruleTester.run( 'no-type', rule, {
	valid: [ 'type()', 'myMethod.type()', 'myMethod.type' ],
	invalid: [
		{
			code: '$.type()',
			errors: [ error ]
		}
	]
} );
