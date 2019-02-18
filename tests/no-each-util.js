'use strict';

const rule = require( '../rules/no-each-util' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer Array#forEach to $.each';

const ruleTester = new RuleTester();
ruleTester.run( 'no-each-util', rule, {
	valid: [
		'each()',
		'[].each()',
		'div.each()',
		'div.each',
		'$("div").each()',
		'$div.each()',
		'$("div").first().each()',
		'$("div").append($("input").each())'
	],
	invalid: [
		{
			code: '$.each()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
