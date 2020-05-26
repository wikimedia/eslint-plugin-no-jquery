'use strict';

const rule = require( '../../src/rules/no-load' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer fetch to .load';

const ruleTester = new RuleTester();
ruleTester.run( 'no-load', rule, {
	valid: [ 'load()', '[].load()', 'div.load()', 'div.load', '$.load()' ],
	invalid: [
		{
			code: '$("div").load()',
			errors: [ error ]
		},
		{
			code: '$div.load()',
			errors: [ error ]
		},
		{
			code: '$("div").first().load()',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").load())',
			errors: [ error ]
		}
	]
} );
