'use strict';

const rule = require( '../rules/no-ajax-events' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-ajax-events', rule, {
	valid: [
		'$(document).on("click", function(e){ })',
		'$form.on("submit", function(e){ })',
		'$form.on()',
		'on("ajaxSuccess", ".js-select-menu", function(e){ })',
		'form.on("ajaxSend")'
	],
	invalid: [
		{
			code: '$(document).on("ajaxSend", function(e){ })',
			errors: [
				{
					message: 'Prefer local event to ajaxSend',
					type: 'CallExpression'
				}
			]
		},
		{
			code: '$(document).on("ajaxSuccess", function(e){ })',
			errors: [
				{
					message: 'Prefer local event to ajaxSuccess',
					type: 'CallExpression'
				}
			]
		},
		{
			code: '$form.on("ajaxError", function(e){ })',
			errors: [
				{
					message: 'Prefer local event to ajaxError',
					type: 'CallExpression'
				}
			]
		},
		{
			code: '$form.on("ajaxComplete", function(e){ })',
			errors: [
				{
					message: 'Prefer local event to ajaxComplete',
					type: 'CallExpression'
				}
			]
		},
		{
			code: '$form.on("ajaxStart", function(e){ })',
			errors: [
				{
					message: 'Prefer local event to ajaxStart',
					type: 'CallExpression'
				}
			]
		},
		{
			code: '$form.on("ajaxStop", function(e){ })',
			errors: [
				{
					message: 'Prefer local event to ajaxStop',
					type: 'CallExpression'
				}
			]
		}
	]
} );
