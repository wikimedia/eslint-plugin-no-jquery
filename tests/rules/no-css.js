'use strict';

const rule = require( '../../src/rules/no-css' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Window#getComputedStyle to .css/$.css';

const ruleTester = new RuleTester();
ruleTester.run( 'no-css', rule, {
	valid: [ 'css()', '[].css()', 'div.css()', 'div.css' ],
	invalid: [
		{
			code: '$.css()',
			errors: [ error ]
		},
		{
			code: '$("div").css()',
			errors: [ error ]
		},
		{
			code: '$div.css()',
			errors: [ error ]
		},
		{
			code: '$("div").first().css()',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").css())',
			errors: [ error ]
		}
	]
} );
