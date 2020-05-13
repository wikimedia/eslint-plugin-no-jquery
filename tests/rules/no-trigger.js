'use strict';

const rule = require( '../../src/rules/no-trigger' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer EventTarget#dispatchEvent to .trigger';

const ruleTester = new RuleTester();
ruleTester.run( 'no-trigger', rule, {
	valid: [ 'trigger()', '[].trigger()', 'div.trigger()', 'div.trigger' ],
	invalid: [
		{
			code: '$("div").trigger()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.trigger()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().trigger()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").trigger())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
