'use strict';

const rule = require( '../../src/rules/no-ready-shorthand' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer $() to .ready';

const ruleTester = new RuleTester();
ruleTester.run( 'no-ready-shorthand', rule, {
	valid: [
		'ready()',
		'[].ready()',
		'div.ready()',
		'div.ready',
		'$.ready()',
		'$(document).on("ready", function(){})',
		'$(function(){})'
	],
	invalid: [
		{
			code: '$(document).ready()',
			errors: [ error ]
		},
		{
			code: '$div.ready()',
			errors: [ error ]
		},
		{
			code: '$("div").first().ready()',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").ready())',
			errors: [ error ]
		}
	]
} );
