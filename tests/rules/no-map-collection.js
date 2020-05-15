'use strict';

const rule = require( '../../src/rules/no-map-collection' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Array#map to .map';

const ruleTester = new RuleTester();
ruleTester.run( 'no-map-collection', rule, {
	valid: [ 'map()', '[].map()', 'div.map()', 'div.map', '$.map()', '$("select").val().map()' ],
	invalid: [
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
		}
	]
} );
