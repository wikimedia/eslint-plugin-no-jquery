'use strict';

const rule = require( '../rules/no-prop' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer direct property access to $.prop';
const errorRemove = 'Prefer direct property access to $.removeProp';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-prop', rule, {
	valid: [ 'prop()', '[].prop()', 'div.prop()', 'div.prop', 'removeProp()', 'div.removeProp()' ],
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
		},
		// $.removeProp util is disallowed too as the rule is shared
		// with $.prop, but $.removeProp doesn't exist
		{
			code: '$("div").removeProp()',
			errors: [ { message: errorRemove, type: 'CallExpression' } ]
		}
	]
} );
