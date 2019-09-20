'use strict';

const rule = require( '../rules/no-parse-html-literal' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer DOM building to $.parseHTML on literals';

const ruleTester = new RuleTester();
ruleTester.run( 'no-parse-html-literal', rule, {
	valid: [
		// $( html )
		'$()',
		'$("")',
		'$([])',
		'$(variable)',
		'$(variable1 = variable2)',
		'$(function() {})',
		'$("<div>")',
		'$("<div></div>")',
		'$("<div>", {width:100})',
		'$("<div/>")',
		'$("<div />")',
		'$("<" + "div" + ">")',
		// $.html
		'$div.html()',
		'$div.html(variable)',
		// $.append
		'$div.append(variable)',
		// $.add
		'$div.add(variable)',

		// $.parseHTML
		'$.parseHTML(variable)',
		'$.parseHTML(variable1 + variable2)',
		// TODO: This passes, but maybe it shouldn't?
		'$.parseHTML("string" + variable)'
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
		// In addition, don't event use $.parseHTML for single tags
		{
			code: '$.parseHTML("<div>")',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	] )
} );
