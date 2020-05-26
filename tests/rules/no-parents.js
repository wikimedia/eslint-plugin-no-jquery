'use strict';

const rule = require( '../../src/rules/no-parents' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Element#closest to .parents';

const ruleTester = new RuleTester();
ruleTester.run( 'no-parents', rule, {
	valid: [ 'parents()', '[].parents()', 'div.parents()', 'div.parents' ],
	invalid: [
		{
			code: '$("div").parents()',
			errors: [ error ]
		},
		{
			code: '$div.parents()',
			errors: [ error ]
		},
		{
			code: '$("div").first().parents()',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").parents())',
			errors: [ error ]
		}
	]
} );
