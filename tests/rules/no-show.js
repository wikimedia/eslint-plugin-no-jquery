'use strict';

const rule = require( '../../src/rules/no-show' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '.show is not allowed. This rule is deprecated, use no-visibility.';

const ruleTester = new RuleTester();
ruleTester.run( 'no-show', rule, {
	valid: [ 'show()', '[].show()', 'div.show()', 'div.show' ],
	invalid: [
		{
			code: '$("div").show()',
			errors: [ error ]
		},
		{
			code: '$div.show()',
			errors: [ error ]
		},
		{
			code: '$("div").first().show()',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").show())',
			errors: [ error ]
		}
	]
} );
