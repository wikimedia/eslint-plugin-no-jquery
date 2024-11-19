'use strict';

const rule = require( '../../src/rules/no-fx' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '$.fx is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-fx', rule, {
	valid: [ 'fx', 'fx.interval', 'a.fx' ],
	invalid: [
		{
			code: '$.fx',
			errors: [ error ]
		},
		{
			code: '$.fx.interval',
			errors: [ error ]
		},
		{
			code: '$.fx.off',
			errors: [ error ]
		},
		{
			code: '$.fx.speeds.slow',
			errors: [ error ]
		},
		{
			code: '$.fx.start()',
			errors: [ error ]
		}
	]
} );
