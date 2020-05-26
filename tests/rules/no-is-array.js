'use strict';

const rule = require( '../../src/rules/no-is-array' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Array.isArray to $.isArray';

const ruleTester = new RuleTester();
ruleTester.run( 'no-is-array', rule, {
	valid: [ 'isArray()', '"test".isArray()', '"test".isArray' ],
	invalid: [
		{
			code: '$.isArray( [] )',
			errors: [ error ],
			output: 'Array.isArray( [] )'
		}
	]
} );
