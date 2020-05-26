'use strict';

const rule = require( '../../src/rules/no-when' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Promise.all to $.when';

const ruleTester = new RuleTester();
ruleTester.run( 'no-when', rule, {
	valid: [ 'When()', 'new When()', '"test".when()', '"test".when', '$when()' ],
	invalid: [
		{
			code: '$.when(a,b)',
			errors: [ error ]
		}
	]
} );
