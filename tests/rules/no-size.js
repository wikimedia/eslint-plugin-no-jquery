'use strict';

const rule = require( '../../src/rules/no-size' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer .length to .size';

const ruleTester = new RuleTester();
ruleTester.run( 'no-size', rule, {
	valid: [ 'size()', '[].size()', 'div.size()', 'div.size' ],
	invalid: [
		{
			code: '$("div").size()',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$("div").length'
		},
		{
			code: '$div.size()',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$div.length'
		},
		{
			code: '$("div").first().size()',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$("div").first().length'
		},
		{
			code: '$("div").append($("input").size())',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$("div").append($("input").length)'
		}
	]
} );
