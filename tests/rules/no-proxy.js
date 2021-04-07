'use strict';

const rule = require( '../../src/rules/no-proxy' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Function#bind to $.proxy';

const ruleTester = new RuleTester();
ruleTester.run( 'no-proxy', rule, {
	valid: [ 'proxy(fn, context)', '"test".proxy(fn, context)', '"test".proxy' ],
	invalid: [
		{
			code: '$.proxy(this.fn, context)',
			errors: [ error ],
			output: 'this.fn.bind(context)'
		},
		{
			code: '$.proxy(fn, context, arg1, arg2)',
			errors: [ error ],
			output: 'fn.bind(context, arg1, arg2)'
		},
		{
			code: '$.proxy(context, "fnName")',
			errors: [ error ]
		},
		{
			code: '$.proxy(context, "fnName", arg1, arg2)',
			errors: [ error ]
		},
		{
			code: '$.proxy()',
			errors: [ error ],
			docgen: false
		}
	]
} );
