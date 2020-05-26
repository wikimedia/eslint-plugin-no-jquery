'use strict';

const rule = require( '../../src/rules/no-each-collection' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Array#forEach to .each';

const ruleTester = new RuleTester();
ruleTester.run( 'no-each-collection', rule, {
	valid: [ 'each()', '[].each()', 'div.each()', 'div.each', '$.each()' ],
	invalid: [
		{
			code: '$("div").each()',
			errors: [ error ]
		},
		{
			code: '$div.each()',
			errors: [ error ]
		},
		{
			code: '$("div").first().each()',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").each())',
			errors: [ error ]
		}
	]
} );
