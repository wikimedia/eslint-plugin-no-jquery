'use strict';

const rule = require( '../../src/rules/no-is-function' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer typeof to $.isFunction';

const ruleTester = new RuleTester();
ruleTester.run( 'no-is-function', rule, {
	valid: [ 'isFunction()', 'myClass.isFunction()', '$div.isFunction()' ],
	invalid: [
		{
			code: '$.isFunction(expression(arg))',
			errors: [ error ],
			output: 'typeof expression(arg) === "function"'
		},
		{
			code: 'if($.isFunction(fn)){g();}',
			errors: [ error ],
			output: 'if(typeof fn === "function"){g();}'
		}
	]
} );
