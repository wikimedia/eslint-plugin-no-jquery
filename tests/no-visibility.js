'use strict';

const rule = require( '../rules/no-visibility' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const errorShow = '$.show is not allowed';
const errorHide = '$.hide is not allowed';
const errorToggle = '$.toggle is not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-visibility', rule, {
	valid: [
		'show()',
		'[].show()',
		'div.show()',
		'div.show',

		'hide()',
		'[].hide()',
		'div.hide()',
		'div.hide',

		'toggle()',
		'[].toggle()',
		'div.toggle()',
		'div.toggle'
	],
	invalid: [
		{
			code: '$("div").show()',
			errors: [ { message: errorShow, type: 'CallExpression' } ]
		},
		{
			code: '$div.show()',
			errors: [ { message: errorShow, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().show()',
			errors: [ { message: errorShow, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").show())',
			errors: [ { message: errorShow, type: 'CallExpression' } ]
		},
		{
			code: '$("div").hide()',
			errors: [ { message: errorHide, type: 'CallExpression' } ]
		},
		{
			code: '$div.hide()',
			errors: [ { message: errorHide, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().hide()',
			errors: [ { message: errorHide, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").hide())',
			errors: [ { message: errorHide, type: 'CallExpression' } ]
		},
		{
			code: '$("div").toggle()',
			errors: [ { message: errorToggle, type: 'CallExpression' } ]
		},
		{
			code: '$div.toggle()',
			errors: [ { message: errorToggle, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().toggle()',
			errors: [ { message: errorToggle, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").toggle())',
			errors: [ { message: errorToggle, type: 'CallExpression' } ]
		}
	]
} );
