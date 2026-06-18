'use strict';

const rule = require( '../../src/rules/no-class' );
const RuleTester = require( '../../tools/rule-tester' );

const addError = { messageId: 'classList', data: { name: 'addClass' } };
const hasError = { messageId: 'classList', data: { name: 'hasClass' } };
const removeError = { messageId: 'classList', data: { name: 'removeClass' } };
const toggleError = { messageId: 'classList', data: { name: 'toggleClass' } };
const toggleDeprecatedError = { messageId: 'toggleDeprecated' };

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
