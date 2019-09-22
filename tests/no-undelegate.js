'use strict';

const rule = require( '../rules/no-undelegate' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer $.off/EventTarget#removeEventListener to $.undelegate';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-undelegate', rule, {
	valid: [
		'undelegate()',
		'[].undelegate()',
		'div.undelegate()',
		'div.undelegate'
	],
	invalid: [
		{
			code: '$("div").undelegate()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.undelegate()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().undelegate()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").undelegate())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
