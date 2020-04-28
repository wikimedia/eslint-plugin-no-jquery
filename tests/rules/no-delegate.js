'use strict';

const rule = require( '../../src/rules/no-delegate' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const delegateError = 'Prefer .on/EventTarget#addEventListener to .delegate';
const undelegateError = 'Prefer .off/EventTarget#removeEventListener to .undelegate';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-delegate', rule, {
	valid: [
		'delegate()',
		'[].delegate()',
		'div.delegate()',
		'div.delegate',

		'undelegate()',
		'[].undelegate()',
		'div.undelegate()',
		'div.undelegate'
	],
	invalid: [
		{
			code: '$("div").delegate()',
			errors: [ { message: delegateError, type: 'CallExpression' } ]
		},
		{
			code: '$div.delegate()',
			errors: [ { message: delegateError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().delegate()',
			errors: [ { message: delegateError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").delegate())',
			errors: [ { message: delegateError, type: 'CallExpression' } ]
		},

		{
			code: '$("div").undelegate()',
			errors: [ { message: undelegateError, type: 'CallExpression' } ]
		},
		{
			code: '$div.undelegate()',
			errors: [ { message: undelegateError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().undelegate()',
			errors: [ { message: undelegateError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").undelegate())',
			errors: [ { message: undelegateError, type: 'CallExpression' } ]
		}
	]
} );
