'use strict';

const rule = require( '../../src/rules/no-each' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Array#forEach to .each/$.each';

const ruleTester = new RuleTester();
ruleTester.run( 'no-each', rule, {
	valid: [ 'each()', '[].each()', 'div.each()', 'div.each' ],
	invalid: [
		{
			code: '$.each()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").each()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.each()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().each()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").each())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
