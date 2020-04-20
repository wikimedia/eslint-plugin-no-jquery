'use strict';

const rule = require( '../../src/rules/no-load-shorthand' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer .on or .trigger to .load';

const ruleTester = new RuleTesterAndDocs( {
	parserOptions: { ecmaVersion: 2015 }
} );
ruleTester.run( 'no-load-shorthand', rule, {
	valid: [
		'load()',
		'[].load()',
		'div.load()',
		'div.load',
		'$.load()',
		'$div.load("url")',
		'$div.load(couldBeUrl)'
	],
	invalid: [
		{
			code: '$("div").load(function(){})',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$("div").on("load", function(){})'
		},
		{
			code: '$div.load(function(){})',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.load()',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$div.trigger("load")'
		},
		{
			code: '$div.load(() => {})',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().load(function(){})',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").load(function(){}))',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
