'use strict';

const rule = require( '../../src/rules/no-val' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer HTMLInputElement#value to .val';

const ruleTester = new RuleTester();
ruleTester.run( 'no-val', rule, {
	valid: [ 'val()', '[].val()', 'div.val()', 'div.val' ],
	invalid: [
		{
			code: '$("div").val()',
			errors: [ error ]
		},
		{
			code: '$div.val()',
			errors: [ error ]
		},
		{
			code: '$("div").first().val()',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").val())',
			errors: [ error ]
		}
	]
} );
