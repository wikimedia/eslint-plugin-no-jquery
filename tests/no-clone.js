'use strict';

const rule = require( '../rules/no-clone' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer cloneNode to clone';

const ruleTester = new RuleTester();
ruleTester.run( 'no-clone', rule, {
	valid: [
		'clone()',
		'[].clone()',
		'div.clone()',
		'div.clone',
		'$div.prop.clone()',
		'$div["prop"].clone()',
		'$div[0].clone()'
	],
	invalid: [
		{
			code: '$("div").clone()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.clone()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: 'this.prop.$div.clone()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().clone()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").clone())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
