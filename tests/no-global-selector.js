'use strict';

const rule = require( '../rules/no-global-selector' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Global selectors are not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-global-selector', rule, {
	valid: [
		'$("<div>")',
		'$("<div attr=val>")',
		'$("<div>", {attr:"val"})',
		'$(" \\t<div attr = val> \\n")',
		'$(context).find(".selector")',
		'$(".selector", context)',
		'$(".selector", "#")',
		'$(".selector", [])',
		'$(function() {})',
		// Variables could be a selector, but could equally be HTML or functions, so leave as valid
		'$(variable)',
		// Empty sets
		'$([])',
		'$("")',
		'$(null)',
		'$(null)',
		'$(undefined)',
		'$(false)',
		// Pre-jQuery 3 syntax for empty set
		'$("#")'
	],
	invalid: [
		{
			code: '$(".div")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("#id")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(".selector")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(".selector > .child")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(".selector", ".context")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(".selector", "")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(".selector", null)',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(".selector", undefined)',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(".selector", $(".context"))',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
