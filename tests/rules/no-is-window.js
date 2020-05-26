'use strict';

const rule = require( '../../src/rules/no-is-window' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '$.isWindow is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-is-window', rule, {
	valid: [ 'isWindow()', 'myClass.isWindow()' ],
	invalid: [
		{
			code: '$.isWindow()',
			errors: [ error ]
		}
	]
} );
