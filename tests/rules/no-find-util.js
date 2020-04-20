'use strict';

const rule = require( '../../src/rules/no-find-util' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer Document#querySelectorAll to $.find';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-find-util', rule, {
	valid: [
		'find()',
		'[].find()',
		'div.find()',
		'div.find',
		'$.extend().find()',
		'$div.myPlugin("foo").find()',
		'$("div").find()',
		'$div.find()',
		'$("div").first().find()',
		'$("div").append($("input").find())'
	],
	invalid: [
		{
			code: '$.find()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
