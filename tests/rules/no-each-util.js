'use strict';

const rule = require( '../../src/rules/no-each-util' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer Array#forEach to $.each';

const ruleTester = new RuleTesterAndDocs();
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
