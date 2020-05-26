'use strict';

const rule = require( '../../src/rules/no-map' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Array#map to .map/$.map';

const ruleTester = new RuleTester();
ruleTester.run( 'no-map', rule, {
	valid: [ 'map()', '[].map()', 'div.map()', 'div.map;', '$("div").toArray().map()', '$("select").val().map()' ],
	invalid: [
		{
			code: '$.map()',
			errors: [ error ]
		},
		{
			code: '$("div").map()',
			errors: [ error ]
		},
		{
			code: '$div.map()',
			errors: [ error ]
		},
		{
			code: '$("div").first().map()',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").map())',
			errors: [ error ]
		},
		{
			code: '$("select").val([]).map()',
			errors: [ error ]
		}
	]
} );
