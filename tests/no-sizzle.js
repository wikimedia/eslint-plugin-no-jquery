'use strict';

const rule = require( '../rules/no-sizzle' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Selector extensions are not allowed';
const errorPositional = 'Positional selector extensions are not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-sizzle', rule, {
	valid: [
		'find(":input")',
		'div.find(":input")',
		'$(this).on("custom:input")',
		'$(this).on("custom:selected")',
		'$(this).find(".selected")',
		'$(this).find(":checked")',
		'$(this).find("input")',
		'$(this).find(":first-child")',
		'$(this).find(":first-child div")',
		'$(this).find(":last-child")',
		'$(this).find(":last-child div")',
		'$(this).find($())',
		'$(this).find(function() {})',
		'$(this).find()',
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
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":animated")',
			options: [ { allowPositional: true } ],
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":button")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":checkbox")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":eq(2)")',
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(":eq(2)")',
			options: [ { allowOther: true } ],
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(":even")',
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(":even")',
			options: [ { allowOther: true } ],
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(":file")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":first")',
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(":first")',
			options: [ { allowOther: true } ],
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(":gt(2)")',
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(":gt(2)")',
			options: [ { allowOther: true } ],
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(this).find(":gt(" + n + ")")',
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(":has(.foo)")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":header")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":hidden")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("." + className + ":hidden")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":image")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":input")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":last")',
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(":last")',
			options: [ { allowOther: true } ],
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(":lt(2)")',
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(":lt(2)")',
			options: [ { allowOther: true } ],
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(":nth(2)")',
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(":nth(2)")',
			options: [ { allowOther: true } ],
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(":odd")',
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(":odd")',
			options: [ { allowOther: true } ],
			errors: [ { message: errorPositional, type: 'CallExpression' } ]
		},
		{
			code: '$(":parent")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":password")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":radio")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":reset")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":selected")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":submit")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":text")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").children(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").closest(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").filter(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").find(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").has(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").is(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").next(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").nextAll(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").nextUntil(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").not(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").parent(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").parents(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").parentsUntil(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").prev(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").prevAll(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").prevUntil(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").siblings(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div:visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div:visible").find("p")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").find("p:visible").addClass("test").find("p")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").find(":visible")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").find("div:animated")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.find("form input:checkbox")',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
