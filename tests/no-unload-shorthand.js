'use strict';

const rule = require( '../rules/no-unload-shorthand' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer $.on or $.trigger to $.unload';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-unload-shorthand', rule, {
	valid: [
		'unload()',
		'[].unload()',
		'div.unload()',
		'div.unload',
		'$.unload()'
	],
	invalid: [
		{
			code: '$("div").unload()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.unload()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().unload()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").unload())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
