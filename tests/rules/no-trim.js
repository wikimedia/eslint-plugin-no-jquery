'use strict';

const rule = require( '../../src/rules/no-trim' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer String#trim to $.trim';

const ruleTester = new RuleTester();
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
