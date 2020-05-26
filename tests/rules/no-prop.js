'use strict';

const rule = require( '../../src/rules/no-prop' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer direct property access to .prop/$.prop';
const errorRemove = 'Prefer direct property access to .removeProp/$.removeProp';

const ruleTester = new RuleTester();
ruleTester.run( 'no-prop', rule, {
	valid: [ 'prop()', '[].prop()', 'div.prop()', 'div.prop', 'removeProp()', 'div.removeProp()' ],
	invalid: [
		{
			code: '$.prop()',
			errors: [ error ]
		},
		{
			code: '$("div").prop()',
			errors: [ error ]
		},
		{
			code: '$div.prop()',
			errors: [ error ]
		},
		{
			code: '$("div").first().prop()',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").prop())',
			errors: [ error ]
		},
		// $.removeProp util is disallowed too as the rule is shared
		// with $.prop, but $.removeProp doesn't exist
		{
			code: '$("div").removeProp()',
			errors: [ errorRemove ]
		}
	]
} );
