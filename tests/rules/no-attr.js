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
		{
			code: '$.attr()',
			errors: [ getError ]
		},
		{
			code: '$("div").attr()',
			errors: [ getError ]
		},
		{
			code: '$div.attr()',
			errors: [ getError ]
		},
		{
			code: '$("div").first().attr()',
			errors: [ getError ]
		},
		{
			code: '$("div").append($("input").attr())',
			errors: [ getError ]
		},
		{
			code: '$("div").attr("name")',
			errors: [ getError ]
		},
		{
			code: '$("div").attr("name", "random")',
			errors: [ setError ]
		},
		{
			code: '$.removeAttr()',
			errors: [ removeError ]
		},
		{
			code: '$("div").removeAttr("name")',
			errors: [ removeError ]
		}
	]
} );
