'use strict';

const rule = require( '../rules/no-submit' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer EventTarget#dispatchEvent + HTMLFormElement#submit to $.submit';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-submit', rule, {
	valid: [ 'submit()', '[].submit()', 'form.submit()', 'form.submit' ],
	invalid: [
		{
			code: '$("form").submit()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$form.submit()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("form").first().submit()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("form").append($("input").submit())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
