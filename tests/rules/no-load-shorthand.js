'use strict';

const rule = require( '../../src/rules/no-load-shorthand' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer .on or .trigger to .load';

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
			code: '$("div").load(function(){})',
			output: '$("div").on("load", function(){})'
		},
		{
			code: '$div.load(function(){})',
			output: '$div.on("load", function(){})'
		},
		{
			code: '$div.load()',
			output: '$div.trigger("load")'
		},
		{
			code: '$div.load(() => {})',
			output: '$div.on("load", () => {})'
		},
		{
			code: '$("div").first().load(function(){})',
			output: '$("div").first().on("load", function(){})'
		},
		{
			code: '$("div").append($("input").load(function(){}))',
			output: '$("div").append($("input").on("load", function(){}))'
		}
	].map( ( obj ) => ( { ...obj, errors: [ error ] } ) )
} );
