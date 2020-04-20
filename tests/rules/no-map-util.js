'use strict';

const rule = require( '../../src/rules/no-map-util' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer Array#map to $.map';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-map-util', rule, {
	valid: [
		'map()',
		'[].map()',
		'div.map()',
		'div.map',
		'$("div").map()',
		'$div.map()',
		'$("div").first().map()',
		'$("div").append($("input").map())',
		'$("select").val().map()'
	],
	invalid: [
		{
			code: '$.map()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
