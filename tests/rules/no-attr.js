'use strict';

const rule = require( '../../src/rules/no-attr' );
const RuleTester = require( '../../tools/rule-tester' );

const getError = { messageId: 'getAttribute', data: { name: 'attr' } };
const setError = { messageId: 'setAttribute', data: { name: 'attr' } };
const removeError = { messageId: 'removeAttribute', data: { name: 'removeAttr' } };

const ruleTester = new RuleTester();
ruleTester.run( 'no-attr', rule, {
	valid: [ 'attr()', '[].attr()', 'div.attr()', 'div.attr', 'removeAttr()', 'div.removeAttr' ],
	invalid: [
		...[
			'$.attr()',
			'$("div").attr()',
			'$div.attr()',
			'$("div").first().attr()',
			'$("div").append($("input").attr())',
			'$("div").attr("name")'
		].map( ( code ) => ( { code, errors: [ getError ] } ) ),
		...[
			'$("div").attr("name", "random")'
		].map( ( code ) => ( { code, errors: [ setError ] } ) ),
		...[
			'$.removeAttr()',
			'$("div").removeAttr("name")'
		].map( ( code ) => ( { code, errors: [ removeError ] } ) )
	]
} );
