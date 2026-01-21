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
		'ajaxSend',
		'ajaxSuccess',
		'ajaxError',
		'ajaxComplete',
		'ajaxStart',
		'ajaxStop'
	].map( ( method ) => ( [
		{
			code: `$(document).on("${ method }", fn)`,
			errors: getErrors( method )
		},
		{
			code: `$(document).${ method }(fn)`,
			errors: getErrors( method )
		}
	] ) ).flat()
} );
