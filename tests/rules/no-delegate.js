'use strict';

const rule = require( '../../src/rules/no-delegate' );
const RuleTester = require( '../../tools/rule-tester' );

const delegateError = 'Prefer .on/EventTarget#addEventListener to .delegate';
const undelegateError = 'Prefer .off/EventTarget#removeEventListener to .undelegate';

const ruleTester = new RuleTester();
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
			errors: [ delegateError ]
		},
		{
			code: '$div.delegate()',
			errors: [ delegateError ]
		},
		{
			code: '$("div").first().delegate()',
			errors: [ delegateError ]
		},
		{
			code: '$("div").append($("input").delegate())',
			errors: [ delegateError ]
		},

		{
			code: '$("div").undelegate()',
			errors: [ undelegateError ]
		},
		{
			code: '$div.undelegate()',
			errors: [ undelegateError ]
		},
		{
			code: '$("div").first().undelegate()',
			errors: [ undelegateError ]
		},
		{
			code: '$("div").append($("input").undelegate())',
			errors: [ undelegateError ]
		}
	]
} );
