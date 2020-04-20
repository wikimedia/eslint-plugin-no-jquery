'use strict';

const rule = require( '../../src/rules/no-live' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer .on/EventTarget#addEventListener to .live';

const ruleTester = new RuleTesterAndDocs();
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
