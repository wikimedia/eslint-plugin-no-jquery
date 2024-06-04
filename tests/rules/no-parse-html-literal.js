'use strict';

const rule = require( '../../src/rules/no-parse-html-literal' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer DOM building to parsing HTML literals';
const errorMinimal = 'Single tag must use the format: <div>';
const errorSelfClosing = 'Single tag must use the format: <div/>';

const ruleTester = new RuleTester();
ruleTester.run( 'no-parse-html-literal', rule, {
	valid: [
		// $( html )
		'$("")',
		'$("#id > .class[attr]")',
		'$(variable)',
		'$(function(){})',
		'$("<div>")',
		'$("<div>", {width:100})',
		'$("<" + "div" + ">")',

		{
			code: '$()',
			docgen: false
		},
		{
			code: '$([])',
			docgen: false
		},
		{
			code: '$(variable1 = variable2)',
			docgen: false
		},

		{
			code: '$("<div>")',
			options: [ { singleTagStyle: 'minimal' } ]
		},
		{
			code: '$("<div/>")',
			options: [ { singleTagStyle: 'self-closing' } ]
		},
		{
			code: '$("<div />")',
			options: [ { singleTagStyle: 'any' } ]
		},
		{
			code: '$("<div></div>")',
			options: [ { singleTagStyle: 'any' } ]
		},
		{
			code: '$("<div>" + "</div>")',
			options: [ { singleTagStyle: 'any' } ]
		},
		// $.html
		'$div.html()',
		'$div.html(variable)',
		'$.html("<div>contents</div>")',
		// $.append
		'$div.append(variable)',
		// $.add
		'$div.add(variable)',

		// $.parseHTML
		'$.parseHTML(variable)',
		'$.parseHTML(variable1 + variable2)',
		// TODO: This passes, but maybe it shouldn't?
		'$.parseHTML("string" + variable)',

		{
			code: '(function(){$()})()',
			docgen: false
		}
	],
	// Build test cases by joining methods with strings
	invalid: [
		// Methods
		'$',
		'$div.html',
		'$div.append',
		'$div.add',
		'$.parseHTML'
	].reduce( ( acc, method ) => acc.concat(
		[
			// Strings
			'"<div>contents</div>"',
			'"<div attr=val>"',
			'"<div attr=val />"',
			'"<div>" + "content" + "</div>"'
		].map( ( string, i ) => ( {
			code: method + '(' + string + ')',
			errors: [ error ],
			docgen: i === 0 || method === '$'
		} ) )
	), [] ).concat( [
		// In addition, don't even use $.parseHTML for single tags
		{
			code: '$.parseHTML("<div>")',
			errors: [ error ]
		},
		// singleTagStyle
		{
			code: '$("<div/>")',
			errors: [ errorMinimal ],
			output: '$("<div>")'
		},
		{
			code: '$("<div></div>")',
			errors: [ errorMinimal ],
			output: '$("<div>")'
		},
		{
			code: '$("<div/>")',
			options: [ { singleTagStyle: 'minimal' } ],
			errors: [ errorMinimal ],
			output: '$("<div>")',
			docgen: false
		},
		{
			code: '$("<div></div>")',
			options: [ { singleTagStyle: 'minimal' } ],
			errors: [ errorMinimal ],
			output: '$("<div>")',
			docgen: false
		},
		{
			code: '$("<div>")',
			options: [ { singleTagStyle: 'self-closing' } ],
			errors: [ errorSelfClosing ],
			output: '$("<div/>")'
		},
		{
			code: '$("<div />")',
			options: [ { singleTagStyle: 'self-closing' } ],
			errors: [ errorSelfClosing ],
			output: '$("<div/>")'
		},
		{
			code: '$("<div></div>")',
			options: [ { singleTagStyle: 'self-closing' } ],
			errors: [ errorSelfClosing ],
			output: '$("<div/>")'
		},
		{
			code: '$("<div attr=val>")',
			options: [ { singleTagStyle: 'any' } ],
			errors: [ error ]
		},
		{
			code: '$("<div><div>")',
			options: [ { singleTagStyle: 'any' } ],
			errors: [ error ]
		}
	] )
} );
