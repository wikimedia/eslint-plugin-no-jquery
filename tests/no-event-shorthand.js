'use strict';

const rule = require( '../rules/no-event-shorthand' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const ruleTester = new RuleTesterAndDocs();
const forbidden = [
	// Browser
	'error',
	'resize',
	'scroll',
	'unload',
	// Form
	'blur',
	'change',
	'focus',
	'focusin',
	'focusout',
	'select',
	'submit',
	// Keyboard
	'keydown',
	'keypress',
	'keyup',
	// Mouse
	'click',
	'contextmenu',
	'dblclick',
	'hover',
	'mousedown',
	'mouseenter',
	'mouseleave',
	'mousemove',
	'mouseout',
	'mouseover',
	'mouseup',
	// AJAX
	'ajaxStart',
	'ajaxStop',
	'ajaxComplete',
	'ajaxError',
	'ajaxSuccess',
	'ajaxSend'
];
let valid = [];
let invalid = [];

forbidden.forEach( function ( rule ) {
	const error = 'Prefer .on or .trigger to .' + rule;
	valid = valid.concat(
		rule + '()',
		'$.' + rule + '()',
		'[].' + rule + '()',
		'div.' + rule + '()',
		'$method(x).' + rule + '()',
		'div.' + rule
	);
	invalid = invalid.concat(
		{
			code: '$("div").' + rule + '(handler)',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$("div").on("' + rule + '", handler)'
		},
		{
			code: '$div.' + rule + '()',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$div.trigger("' + rule + '")'
		},
		{
			code: 'this.prop.$div.' + rule + '(handler)',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: 'this.prop.$div.on("' + rule + '", handler)'
		},
		{
			code: '$("div").first().' + rule + '()',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$("div").first().trigger("' + rule + '")'
		},
		{
			code: '$("div").append($("input").' + rule + '())',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$("div").append($("input").trigger("' + rule + '"))'
		}
	);
} );
ruleTester.run( 'no-event-shorthand', rule, {
	valid: valid.concat( [
		// Don't conflict with Ajax load
		'$div.load( "url", handler )'
	] ),
	invalid: invalid
} );
