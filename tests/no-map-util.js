'use strict';

const rule = require( '../rules/no-map-util' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer Array#map to $.map';

const ruleTester = new RuleTester();
ruleTester.run( 'no-map-util', rule, {
	valid: [
		'map()',
		'[].map()',
		'div.map()',
		'div.map',
		'$("div").map()',
		'$div.map()',
		'$("div").first().map()',
		'$("div").append($("input").map())'
	],
	invalid: [
		{
			code: '$.map()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
