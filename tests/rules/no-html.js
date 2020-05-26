'use strict';

const rule = require( '../../src/rules/no-html' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Element#innerHTML to .html';

const ruleTester = new RuleTester();
ruleTester.run( 'no-html', rule, {
	valid: [ 'html()', '[].html()', 'div.html()', 'div.html' ],
	invalid: [
		{
			code: '$("div").html()',
			errors: [ error ]
		},
		{
			code: '$div.html()',
			errors: [ error ]
		},
		{
			code: '$("div").first().html()',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").html())',
			errors: [ error ]
		}
	]
} );
