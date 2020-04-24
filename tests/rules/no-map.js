'use strict';

const rule = require( '../../src/rules/no-map' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer Array#map to .map/$.map';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-map', rule, {
	valid: [ 'map()', '[].map()', 'div.map()', 'div.map;', '$("div").toArray().map()', '$("select").val().map()' ],
	invalid: [
		{
			code: '$.map()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").map()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.map()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().map()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").map())',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("select").val([]).map()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );