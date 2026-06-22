'use strict';

const rule = require( '../../src/rules/no-visibility' );
const RuleTester = require( '../../tools/rule-tester' );

const errorShow = { messageId: 'default', data: { name: 'show' } };
const errorHide = { messageId: 'default', data: { name: 'hide' } };
const errorToggle = { messageId: 'default', data: { name: 'toggle' } };

const ruleTester = new RuleTester();
ruleTester.run( 'no-visibility', rule, {
	valid: [
		'show()',
		'[].show()',
		'div.show()',
		'div.show',

		'hide()',
		'[].hide()',
		'div.hide()',
		'div.hide',

		'toggle()',
		'[].toggle()',
		'div.toggle()',
		'div.toggle'
	],
	invalid: [
		...[
			'$("div").show()',
			'$div.show()',
			'$("div").first().show()',
			'$("div").append($("input").show())'
		].map( ( code ) => ( { code, errors: [ errorShow ] } ) ),
		...[
			'$("div").hide()',
			'$div.hide()',
			'$("div").first().hide()',
			'$("div").append($("input").hide())'
		].map( ( code ) => ( { code, errors: [ errorHide ] } ) ),
		...[
			'$("div").toggle()',
			'$div.toggle()',
			'$("div").first().toggle()',
			'$("div").append($("input").toggle())'
		].map( ( code ) => ( { code, errors: [ errorToggle ] } ) )
	]
} );
