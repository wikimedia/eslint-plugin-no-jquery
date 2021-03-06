'use strict';

const rule = require( '../../src/rules/no-parent' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Node#parentElement to .parent';

const ruleTester = new RuleTester();
ruleTester.run( 'no-parent', rule, {
	valid: [ 'parent()', '[].parent()', 'div.parent()', 'div.parent' ],
	invalid: [
		{
			code: '$("div").parent()',
			errors: [ error ]
		},
		{
			code: '$div.parent()',
			errors: [ error ]
		},
		{
			code: '$("div").first().parent()',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").parent())',
			errors: [ error ]
		}
	]
} );
