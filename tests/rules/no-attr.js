'use strict';

const rule = require( '../../src/rules/no-attr' );
const RuleTester = require( '../../tools/rule-tester' );

const getError = 'Prefer Element#getAttribute to .attr/$.attr';
const setError = 'Prefer Element#setAttribute to .attr/$.attr';
const removeError = 'Prefer Element#removeAttribute to .removeAttr/$.removeAttr';

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
