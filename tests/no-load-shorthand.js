'use strict';

const rule = require( '../rules/no-load-shorthand' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer $.on or $.trigger to $.load';

const ruleTester = new RuleTester();
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
			code: '$("div").load(function() {})',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.load(function() {})',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().load(function() {})',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").load(function() {}))',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
