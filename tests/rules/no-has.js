'use strict';

const rule = require( '../../src/rules/no-has' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '.has is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-has', rule, {
	valid: [ 'has()', '[].has()', 'div.has()', 'div.has' ],
	invalid: [
		{
			code: '$("div").has()',
			errors: [ error ]
		},
		{
			code: '$div.has()',
			errors: [ error ]
		},
		{
			code: '$("div").first().has()',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").has())',
			errors: [ error ]
		}
	]
} );
