'use strict';

const rule = require( '../../src/rules/no-class' );
const RuleTester = require( '../../tools/rule-tester' );

const addError = 'Prefer Element#classList to .addClass';
const hasError = 'Prefer Element#classList to .hasClass';
const removeError = 'Prefer Element#classList to .removeClass';
const toggleError = 'Prefer Element#classList to .toggleClass';
const toggleDeprecatedError = '.toggleClass(boolean|undefined) is deprecated';

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
		'div.toggleClass',

		...[
			'$div.attr("class", "")',
			'$div.removeClass("myClass")',
			'toggleClass(false)',
			'obj.toggleClass(false)',
			'$div.toggleClass("myClass", true)',
			'$div.toggleClass("myClass", false)',
			'$div.toggleClass("myClass")',
			'$div.toggleClass("myClass", undefined)'
		].map( ( code ) => ( {
			code,
			options: [ { onlyDeprecated: true } ]
		} ) )
	],
	invalid: [
		...[
			'$("div").addClass()',
			'$div.addClass()',
			'$("div").first().addClass()',
			'$("div").append($("input").addClass())'
		].map( ( code ) => ( { code, errors: [ addError ] } ) ),
		...[
			'$("div").hasClass()',
			'$div.hasClass()',
			'$("div").first().hasClass()',
			'$("div").append($("input").hasClass())'
		].map( ( code ) => ( { code, errors: [ hasError ] } ) ),
		...[
			'$("div").removeClass()',
			'$div.removeClass()',
			'$("div").first().removeClass()',
			'$("div").append($("input").removeClass())'
		].map( ( code ) => ( { code, errors: [ removeError ] } ) ),
		...[
			'$("div").toggleClass()',
			'$div.toggleClass()',
			'$("div").first().toggleClass()',
			'$("div").append($("input").toggleClass())'
		].map( ( code ) => ( { code, errors: [ toggleError ] } ) ),
		...[
			'$div.toggleClass()',
			'$div.toggleClass(false)',
			'$div.toggleClass(true)',
			'$div.toggleClass(undefined)'
		].map( ( code ) => ( {
			code,
			errors: [ toggleDeprecatedError ],
			options: [ { onlyDeprecated: true } ]
		} ) )
	]
} );
