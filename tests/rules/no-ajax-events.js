'use strict';

const rule = require( '../../src/rules/no-ajax-events' );
const RuleTester = require( '../../tools/rule-tester' );

function getErrors( method ) {
	return [ 'Prefer local event to ' + method ];
}

const ruleTester = new RuleTester();
ruleTester.run( 'no-ajax-events', rule, {
	valid: [
		'$(document).on("click", fn)',
		'$form.on("submit", fn)',
		'$form.on()',
		'on("ajaxSuccess", ".js-select-menu", fn)',
		'form.on("ajaxSend")',
		'form.ajaxSend()',
		'$.ajaxSend()'
	],
	invalid: [
		{
			code: '$(document).on("ajaxSend", fn)',
			errors: getErrors( 'ajaxSend' )
		},
		{
			code: '$(document).on("ajaxSuccess", fn)',
			errors: getErrors( 'ajaxSuccess' )
		},
		{
			code: '$form.on("ajaxError", fn)',
			errors: getErrors( 'ajaxError' )
		},
		{
			code: '$form.on("ajaxComplete", fn)',
			errors: getErrors( 'ajaxComplete' )
		},
		{
			code: '$form.on("ajaxStart", fn)',
			errors: getErrors( 'ajaxStart' )
		},
		{
			code: '$form.on("ajaxStop", fn)',
			errors: getErrors( 'ajaxStop' )
		},
		{
			code: '$(document).ajaxSend(fn)',
			errors: getErrors( 'ajaxSend' )
		},
		{
			code: '$(document).ajaxSuccess(fn)',
			errors: getErrors( 'ajaxSuccess' )
		},
		{
			code: '$form.ajaxError(fn)',
			errors: getErrors( 'ajaxError' )
		},
		{
			code: '$form.ajaxComplete(fn)',
			errors: getErrors( 'ajaxComplete' )
		},
		{
			code: '$form.ajaxStart(fn)',
			errors: getErrors( 'ajaxStart' )
		},
		{
			code: '$form.ajaxStop(fn)',
			errors: getErrors( 'ajaxStop' )
		}
	]
} );
