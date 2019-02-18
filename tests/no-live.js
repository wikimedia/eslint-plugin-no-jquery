'use strict';

const rule = require( '../rules/no-live' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer $.on/addEventListener to live';

const ruleTester = new RuleTester();
ruleTester.run( 'no-live', rule, {
	valid: [ 'live()', '[].live()', 'div.live()', 'div.live' ],
	invalid: [
		{
			code: '$("div").live()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.live()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().live()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").live())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
