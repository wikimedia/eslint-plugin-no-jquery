'use strict';

const rule = require( '../../src/rules/no-hide' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '.hide is not allowed. This rule is deprecated, use no-visibility.';

const ruleTester = new RuleTester();
ruleTester.run( 'no-hide', rule, {
	valid: [ 'hide()', '[].hide()', 'div.hide()', 'div.hide' ],
	invalid: [
		{
			code: '$("div").hide()',
			errors: [ error ]
		},
		{
			code: '$div.hide()',
			errors: [ error ]
		},
		{
			code: '$("div").first().hide()',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").hide())',
			errors: [ error ]
		}
	]
} );
