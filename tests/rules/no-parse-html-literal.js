'use strict';

const rule = require( '../../src/rules/no-parse-html-literal' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer DOM building to parsing HTML literals';
const errorMinimal = 'Single tag must use the format: <tagname>';
const errorSelfClosing = 'Single tag must use the format: <tagname/>';

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
			noDoc: true
		},
		{
			code: '$([])',
			noDoc: true
		},
		{
			code: '$(variable1 = variable2)',
			noDoc: true
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
			noDoc: true
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
	].reduce( function ( acc, method ) {
		return acc.concat(
			[
				// Strings
				'"<div>contents</div>"',
				'"<div attr=val>"',
				'"<div attr=val />"',
				'"<div>" + "content" + "</div>"'
			].map( function ( string, i ) {
				return {
					code: method + '(' + string + ')',
					errors: [ error ],
					noDoc: !( i === 0 || method === '$' )
				};
			} )
		);
	}, [] ).concat( [
		// In addition, don't even use $.parseHTML for single tags
		{
			code: '$.parseHTML("<div>")',
			errors: [ error ]
		},
		// singleTagStyle
		{
			code: '$("<div/>")',
			errors: [ errorMinimal ]
		},
		{
			code: '$("<div></div>")',
			errors: [ errorMinimal ]
		},
		{
			code: '$("<div/>")',
			options: [ { singleTagStyle: 'minimal' } ],
			errors: [ errorMinimal ]
		},
		{
			code: '$("<div></div>")',
			options: [ { singleTagStyle: 'minimal' } ],
			errors: [ errorMinimal ]
		},
		{
			code: '$("<div>")',
			options: [ { singleTagStyle: 'self-closing' } ],
			errors: [ errorSelfClosing ]
		},
		{
			code: '$("<div />")',
			options: [ { singleTagStyle: 'self-closing' } ],
			errors: [ errorSelfClosing ]
		},
		{
			code: '$("<div></div>")',
			options: [ { singleTagStyle: 'self-closing' } ],
			errors: [ errorSelfClosing ]
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
