'use strict';

const rule = require( '../../src/rules/no-error' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-error', rule, {
	valid: [ 'error(msg)', 'myClass.error(msg)', '$div.error(msg)' ],
	invalid: [
		{
			code: '$.error(msg)',
			errors: [ error ],
			output: 'throw new Error(msg)'
		},
		{
			code: 'if (a) $.error(msg)',
			errors: [ error ],
			output: 'if (a) throw new Error(msg)',
			docgen: false
		},
		{
			code: 'ready || $.error(msg)',
			errors: [ error ],
			output: null,
			docgen: false
		},
		{
			code: 'f = () => $.error(msg)',
			errors: [ error ],
			output: null,
			docgen: false
		},
		{
			code: 'x = cond ? 1 : $.error(msg)',
			errors: [ error ],
			output: null,
			docgen: false
		},
		{
			code: '($.error(msg));',
			errors: [ error ],
			output: null,
			docgen: false
		}
	]
} );
