'use strict';

const rule = require( '../../src/rules/no-prop' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer direct property access to .prop/$.prop';
const errorRemove = 'Prefer direct property access to .removeProp/$.removeProp';

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
