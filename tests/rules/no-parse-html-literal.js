'use strict';

const rule = require( '../../src/rules/no-parse-html-literal' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer DOM building to parsing HTML literals';
const errorMinimal = 'Single tag must use the format: <tagname>';
const errorSelfClosing = 'Single tag must use the format: <tagname/>';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-parse-html-literal', rule, {
	valid: [
		// $( html )
		'$()',
		'$("")',
		'$([])',
		'$("#id > .class[attr]")',
		'$(variable)',
		'$(variable1 = variable2)',
		'$(function(){})',
		'$("<div>")',
		'$("<div>", {width:100})',
		'$("<" + "div" + ">")',
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
		{
			code: '$("<div />")',
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
			].map( function ( string ) {
				return {
					code: method + '(' + string + ')',
					errors: [ { message: error, type: 'CallExpression' } ]
				};
			} )
		);
	}, [] ).concat( [
		// In addition, don't even use $.parseHTML for single tags
		{
			code: '$.parseHTML("<div>")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		// singleTagStyle
		{
			code: '$("<div/>")',
			errors: [ { message: errorMinimal, type: 'CallExpression' } ]
		},
		{
			code: '$("<div></div>")',
			errors: [ { message: errorMinimal, type: 'CallExpression' } ]
		},
		{
			code: '$("<div/>")',
			options: [ { singleTagStyle: 'minimal' } ],
			errors: [ { message: errorMinimal, type: 'CallExpression' } ]
		},
		{
			code: '$("<div></div>")',
			options: [ { singleTagStyle: 'minimal' } ],
			errors: [ { message: errorMinimal, type: 'CallExpression' } ]
		},
		{
			code: '$("<div>")',
			options: [ { singleTagStyle: 'self-closing' } ],
			errors: [ { message: errorSelfClosing, type: 'CallExpression' } ]
		},
		{
			code: '$("<div />")',
			options: [ { singleTagStyle: 'self-closing' } ],
			errors: [ { message: errorSelfClosing, type: 'CallExpression' } ]
		},
		{
			code: '$("<div></div>")',
			options: [ { singleTagStyle: 'self-closing' } ],
			errors: [ { message: errorSelfClosing, type: 'CallExpression' } ]
		},
		{
			code: '$("<div attr=val>")',
			options: [ { singleTagStyle: 'any' } ],
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("<div><div>")',
			options: [ { singleTagStyle: 'any' } ],
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	] )
} );
