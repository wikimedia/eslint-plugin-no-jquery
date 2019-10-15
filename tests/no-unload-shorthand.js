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
			code: '$("div").unload(handler)',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$("div").on("unload", handler)'
		},
		{
			code: '$div.unload()',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$div.trigger("unload")'
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
