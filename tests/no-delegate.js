'use strict';

const rule = require( '../rules/no-delegate' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer $.on/EventTarget#addEventListener to $.delegate';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-delegate', rule, {
	valid: [ 'delegate()', '[].delegate()', 'div.delegate()', 'div.delegate' ],
	invalid: [
		{
			code: '$("div").delegate()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.delegate()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().delegate()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").delegate())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
