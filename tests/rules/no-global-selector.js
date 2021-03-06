'use strict';

const rule = require( '../../src/rules/no-global-selector' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Avoid queries which search the entire DOM. Keep DOM nodes in memory where possible.';

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
		{
			code: '$("#id")',
			options: [ { allowIds: true } ]
		},
		{
			code: '$("#id-foo_bar1")',
			options: [ { allowIds: true } ]
		},
		'$(function() {})',
		// Variables could be a selector, but could equally be HTML or functions, so leave as valid
		'$(variable)',
		// Empty sets
		'$([])',
		'$("")',
		'$(null)',
		'$(undefined)',
		'$(false)',
		// Pre-jQuery 3 syntax for empty set
		'$("#")'
	],
	invalid: [
		{
			code: '$("div")',
			errors: [ error ]
		},
		{
			code: '$("#id")',
			errors: [ error ]
		},
		{
			code: '$(".selector")',
			errors: [ error ]
		},
		{
			code: '$(".selector > .child")',
			errors: [ error ]
		},
		{
			code: '$(".selector", ".context")',
			errors: [ error ]
		},
		{
			code: '$(".selector", "")',
			errors: [ error ]
		},
		{
			code: '$(".selector", null)',
			errors: [ error ]
		},
		{
			code: '$(".selector", undefined)',
			errors: [ error ]
		},
		{
			code: '$(".selector", $(".context"))',
			errors: [ error ]
		},
		{
			code: '$("#id>div")',
			options: [ { allowIds: true } ],
			errors: [ error ]
		},
		{
			code: '$("#id~div")',
			options: [ { allowIds: true } ],
			errors: [ error ]
		},
		{
			code: '$("#id div")',
			options: [ { allowIds: true } ],
			errors: [ error ]
		}
	]
} );
