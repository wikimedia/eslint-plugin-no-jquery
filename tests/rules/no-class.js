'use strict';

const rule = require( '../../src/rules/no-class' );
const RuleTester = require( '../../tools/rule-tester' );

const addError = 'Prefer Element#classList to .addClass';
const hasError = 'Prefer Element#classList to .hasClass';
const removeError = 'Prefer Element#classList to .removeClass';
const toggleError = 'Prefer Element#classList to .toggleClass';

const ruleTester = new RuleTester();
ruleTester.run( 'no-class', rule, {
	valid: [
		'addClass()',
		'[].addClass()',
		'div.addClass()',
		'div.addClass',

		'hasClass()',
		'[].hasClass()',
		'div.hasClass()',
		'div.hasClass',

		'removeClass()',
		'[].removeClass()',
		'div.removeClass()',
		'div.removeClass',

		'toggleClass()',
		'[].toggleClass()',
		'div.toggleClass()',
		'div.toggleClass'
	],
	invalid: [
		{
			code: '$("div").addClass()',
			errors: [ addError ]
		},
		{
			code: '$div.addClass()',
			errors: [ addError ]
		},
		{
			code: '$("div").first().addClass()',
			errors: [ addError ]
		},
		{
			code: '$("div").append($("input").addClass())',
			errors: [ addError ]
		},
		{
			code: '$("div").hasClass()',
			errors: [ hasError ]
		},
		{
			code: '$div.hasClass()',
			errors: [ hasError ]
		},
		{
			code: '$("div").first().hasClass()',
			errors: [ hasError ]
		},
		{
			code: '$("div").append($("input").hasClass())',
			errors: [ hasError ]
		},
		{
			code: '$("div").removeClass()',
			errors: [ removeError ]
		},
		{
			code: '$div.removeClass()',
			errors: [ removeError ]
		},
		{
			code: '$("div").first().removeClass()',
			errors: [ removeError ]
		},
		{
			code: '$("div").append($("input").removeClass())',
			errors: [ removeError ]
		},
		{
			code: '$("div").toggleClass()',
			errors: [ toggleError ]
		},
		{
			code: '$div.toggleClass()',
			errors: [ toggleError ]
		},
		{
			code: '$("div").first().toggleClass()',
			errors: [ toggleError ]
		},
		{
			code: '$("div").append($("input").toggleClass())',
			errors: [ toggleError ]
		}
	]
} );
