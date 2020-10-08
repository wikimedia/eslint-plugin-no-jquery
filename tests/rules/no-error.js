'use strict';

const rule = require( '../../src/rules/no-error' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer throw to $.error';

const ruleTester = new RuleTester();
ruleTester.run( 'no-error', rule, {
	valid: [ 'error(msg)', 'myClass.error(msg)', '$div.error(msg)' ],
	invalid: [
		{
			code: '$.error(msg)',
			errors: [ error ],
			output: 'throw new Error(msg)'
		}
	]
} );
