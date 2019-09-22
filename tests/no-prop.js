'use strict';

const rule = require( '../rules/no-prop' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer direct property access to $.prop';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-prop', rule, {
	valid: [ 'prop()', '[].prop()', 'div.prop()', 'div.prop' ],
	invalid: [
		{
			code: '$.prop()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").prop()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.prop()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().prop()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").prop())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
