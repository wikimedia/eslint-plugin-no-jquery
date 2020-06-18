'use strict';

const rule = require( '../../src/rules/no-constructor-attributes' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer .attr to constructor attributes';

const ruleTester = new RuleTester();
ruleTester.run( 'no-constructor-attributes', rule, {
	valid: [
		'$(".div")',
		'$("<div>")',
		'$(".div", context)',
		'$("<div>", ownerDocument)',
		'$("<div/>", ownerDocument)',
		'$div.add("<div>", context)',
		{
			code: '(function(){$(".div")})()',
			docgen: false
		}
	],
	invalid: [
		{
			code: '$("<div>", {width:100, class:"foo"})',
			errors: [ error ]
		},
		{
			code: '$("<div>", {on: {click:function(){}}})',
			errors: [ error ]
		},
		{
			code: '$("<div/>", {data:{foo:"bar"}})',
			errors: [ error ]
		},
		// This isn't a documented signature of $.add, but due to the
		// way it is implemented it does work
		{
			code: '$div.add("<div>", {width:100, class:"foo"})',
			errors: [ error ]
		}
	]
} );
