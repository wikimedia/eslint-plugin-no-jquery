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
		'$(function() {})',
		'$("<div>")',
		'$("<div/>")',
		'$("<div />")',
		// $.parseHTML
		'$.parseHTML(variable)',
		'$.parseHTML(variable1 + variable2)'
		// '$.parseHTML("string" + variable)'
	],
	invalid: [
		{
			code: '$("<div>contents</div>")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("<div attr=val>")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("<div attr=val/>")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$.parseHTML("<div>")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$.parseHTML("<div>" + "</div>")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$.parseHTML("<div>" + "content" + "</div>")',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
