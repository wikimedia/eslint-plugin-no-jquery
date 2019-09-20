'use strict';

const rule = require( '../rules/no-constructor-attributes' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer $.attr to constructor attributes';

const ruleTester = new RuleTester();
ruleTester.run( 'no-constructor-attributes', rule, {
	valid: [
		'$(".div")',
		'$("<div>")',
		'$(".div", context)',
		'$("<div>", ownerDocument)',
		'$("<div/>", ownerDocument)',
		'$div.add("<div>", context)'
	],
	invalid: [
		{
			code: '$("<div>", {width:100, class:"foo"})',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("<div>", {on: {click:function(){}}})',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("<div/>", {data:{foo:"bar"}})',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		// This isn't a documented signature of $.add, but due to the
		// way it is imlpemented it does work
		{
			code: '$div.add("<div>", {width:100, class:"foo"})',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
