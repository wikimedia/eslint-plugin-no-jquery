'use strict';

const rule = require( '../rules/no-bind' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer $.on/EventTarget#addEventListener to $.bind';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-bind', rule, {
	valid: [
		'bind()',
		'[].bind()',
		'div.bind()',
		'div.bind',
		'$div.remove.bind($div)'
	],
	invalid: [
		{
			code: '$("div").bind()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.bind()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().bind()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").bind())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
