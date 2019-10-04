'use strict';

const rule = require( '../rules/no-trim' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer String#trim to $.trim';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-trim', rule, {
	valid: [
		'trim(" test ")',
		'" test ".trim()',
		'" test ".trim',
		'$("input").text().trim()',
		'$("input").data("foo").trim()'
	],
	invalid: [
		{
			code: '$.trim(" test ")',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
