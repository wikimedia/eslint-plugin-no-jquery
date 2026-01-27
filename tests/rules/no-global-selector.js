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
			code: '$("div")'
		},
		{
			code: '$("#id")'
		},
		{
			code: '$(".selector")'
		},
		{
			code: '$(".selector > .child")'
		},
		{
			code: '$(".selector", ".context")'
		},
		{
			code: '$(".selector", "")'
		},
		{
			code: '$(".selector", null)'
		},
		{
			code: '$(".selector", undefined)'
		},
		{
			code: '$(".selector", $(".context"))'
		},
		{
			code: '$("#id>div")',
			options: [ { allowIds: true } ]
		},
		{
			code: '$("#id~div")',
			options: [ { allowIds: true } ]
		},
		{
			code: '$("#id div")',
			options: [ { allowIds: true } ]
		}
	].map( ( obj ) => ( { ...obj, errors: [ error ] } ) )
} );
