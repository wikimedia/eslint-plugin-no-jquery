'use strict';

const rule = require( '../rules/no-hide' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = '$.hide is not allowed. This rule is deprecated, use no-visibility.';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-hide', rule, {
	valid: [ 'hide()', '[].hide()', 'div.hide()', 'div.hide' ],
	invalid: [
		{
			code: '$("div").hide()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.hide()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().hide()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").hide())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
