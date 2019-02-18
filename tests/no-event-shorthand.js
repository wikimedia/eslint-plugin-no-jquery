'use strict';

const rule = require( '../rules/no-event-shorthand' );
const RuleTester = require( 'eslint' ).RuleTester;

const ruleTester = new RuleTester();
const forbidden = [
	// Browser
	'error',
	'resize',
	'scroll',
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
	'mouseup'
];
let valid = [];
let invalid = [];

forbidden.forEach( function ( rule ) {
	const error = 'Prefer $.on or $.trigger to $.' + rule;
	valid = valid.concat(
		rule + '()',
		'$.' + rule + '()',
		'[].' + rule + '()',
		'div.' + rule + '()',
		'div.' + rule
	);
	invalid = invalid.concat(
		{
			code: '$("div").' + rule + '()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.' + rule + '()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: 'this.prop.$div.' + rule + '()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().' + rule + '()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").' + rule + '())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	);
} );
ruleTester.run( 'no-event-shorthand', rule, {
	valid: valid,
	invalid: invalid
} );
