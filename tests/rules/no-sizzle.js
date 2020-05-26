'use strict';

const rule = require( '../../src/rules/no-sizzle' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Selector extensions are not allowed';
const errorPositional = 'Positional selector extensions are not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-sizzle', rule, {
	valid: [
		'find(":input")',
		'div.find(":input")',
		'$("div").on("custom:input")',
		'$("div").on("custom:selected")',
		'$("div").find(".selected")',
		'$("div").find(":checked")',
		'$("div").find("input")',
		'$("div").find(":first-child")',
		'$("div").find(":first-child div")',
		'$("div").find(":last-child")',
		'$("div").find(":last-child div")',
		'$("div").find($())',
		'$("div").find(function() {})',
		'$("div").find()',
		'$(function() {})',
		{
			code: '$(":checked")',
			options: [ { allowPositional: true } ]
		},
		{
			code: '$(":animated")',
			options: [ { allowOther: true } ]
		},
		{
			code: '$(":button")',
			options: [ { allowOther: true } ]
		},
		{
			code: '$(":checkbox")',
			options: [ { allowOther: true } ]
		},
		{
			code: '$(":file")',
			options: [ { allowOther: true } ]
		},
		{
			code: '$(":has(.foo)")',
			options: [ { allowOther: true } ]
		},
		{
			code: '$(":header")',
			options: [ { allowOther: true } ]
		},
		{
			code: '$(":hidden")',
			options: [ { allowOther: true } ]
		},
		{
			code: '$(":image")',
			options: [ { allowOther: true } ]
		},
		{
			code: '$(":input")',
			options: [ { allowOther: true } ]
		},
		{
			code: '$(":parent")',
			options: [ { allowOther: true } ]
		},
		{
			code: '$(":password")',
			options: [ { allowOther: true } ]
		},
		{
			code: '$(":radio")',
			options: [ { allowOther: true } ]
		},
		{
			code: '$(":reset")',
			options: [ { allowOther: true } ]
		},
		{
			code: '$(":submit")',
			options: [ { allowOther: true } ]
		},
		{
			code: '$(":text")',
			options: [ { allowOther: true } ]
		},
		{
			code: '$(":visible")',
			options: [ { allowOther: true } ]
		}
	],
	invalid: [
		{
			code: '$(":animated")',
			errors: [ error ]
		},
		{
			code: '$(":animated")',
			options: [ { allowPositional: true } ],
			errors: [ error ]
		},
		{
			code: '$(":button")',
			errors: [ error ]
		},
		{
			code: '$(":checkbox")',
			errors: [ error ]
		},
		{
			code: '$(":eq(2)")',
			errors: [ errorPositional ]
		},
		{
			code: '$(":eq(2)")',
			options: [ { allowOther: true } ],
			errors: [ errorPositional ]
		},
		{
			code: '$(":even")',
			errors: [ errorPositional ]
		},
		{
			code: '$(":even")',
			options: [ { allowOther: true } ],
			errors: [ errorPositional ]
		},
		{
			code: '$(":file")',
			errors: [ error ]
		},
		{
			code: '$(":first")',
			errors: [ errorPositional ]
		},
		{
			code: '$(":first")',
			options: [ { allowOther: true } ],
			errors: [ errorPositional ]
		},
		{
			code: '$(":gt(2)")',
			errors: [ errorPositional ]
		},
		{
			code: '$(":gt(2)")',
			options: [ { allowOther: true } ],
			errors: [ errorPositional ]
		},
		{
			code: '$("div").find(":gt(" + n + ")")',
			errors: [ errorPositional ]
		},
		{
			code: '$(":has(.foo)")',
			errors: [ error ]
		},
		{
			code: '$(":header")',
			errors: [ error ]
		},
		{
			code: '$(":hidden")',
			errors: [ error ]
		},
		{
			code: '$("." + className + ":hidden")',
			errors: [ error ]
		},
		{
			code: '$(":image")',
			errors: [ error ]
		},
		{
			code: '$(":input")',
			errors: [ error ]
		},
		{
			code: '$(":last")',
			errors: [ errorPositional ]
		},
		{
			code: '$(":last")',
			options: [ { allowOther: true } ],
			errors: [ errorPositional ]
		},
		{
			code: '$(":lt(2)")',
			errors: [ errorPositional ]
		},
		{
			code: '$(":lt(2)")',
			options: [ { allowOther: true } ],
			errors: [ errorPositional ]
		},
		{
			code: '$(":nth(2)")',
			errors: [ errorPositional ]
		},
		{
			code: '$(":nth(2)")',
			options: [ { allowOther: true } ],
			errors: [ errorPositional ]
		},
		{
			code: '$(":odd")',
			errors: [ errorPositional ]
		},
		{
			code: '$(":odd")',
			options: [ { allowOther: true } ],
			errors: [ errorPositional ]
		},
		{
			code: '$(":parent")',
			errors: [ error ]
		},
		{
			code: '$(":password")',
			errors: [ error ]
		},
		{
			code: '$(":radio")',
			errors: [ error ]
		},
		{
			code: '$(":reset")',
			errors: [ error ]
		},
		{
			code: '$(":selected")',
			errors: [ error ]
		},
		{
			code: '$(":submit")',
			errors: [ error ]
		},
		{
			code: '$(":text")',
			errors: [ error ]
		},
		{
			code: '$(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").children(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").closest(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").filter(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").find(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").has(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").is(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").next(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").nextAll(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").nextUntil(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").not(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").parent(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").parents(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").parentsUntil(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").prev(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").prevAll(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").prevUntil(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div").siblings(":visible")',
			errors: [ error ]
		},
		{
			code: '$("div:visible")',
			errors: [ error ]
		},
		{
			code: '$("div:visible").find("p")',
			errors: [ error ]
		},
		{
			code: '$("div").find("p:visible").addClass("test").find("p")',
			errors: [ error ]
		},
		{
			code: '$("div").find("div:animated")',
			errors: [ error ]
		},
		{
			code: '$div.find("form input:checkbox")',
			errors: [ error ]
		}
	]
} );
