'use strict';

const rule = require( '../rules/no-each-collection' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer Array#forEach to $.each';

const ruleTester = new RuleTester();
ruleTester.run( 'no-each-collection', rule, {
	valid: [ 'each()', '[].each()', 'div.each()', 'div.each', '$.each()' ],
	invalid: [
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
