'use strict';

const rule = require( '../../src/rules/no-submit' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer EventTarget#dispatchEvent + HTMLFormElement#submit to .submit. This rule is deprecated, use no-event-shorthand.';

const ruleTester = new RuleTester();
ruleTester.run( 'no-submit', rule, {
	valid: [ 'submit()', '[].submit()', 'form.submit()', 'form.submit' ],
	invalid: [
		{
			code: '$("form").submit()',
			errors: [ error ]
		},
		{
			code: '$form.submit()',
			errors: [ error ]
		},
		{
			code: '$("form").first().submit()',
			errors: [ error ]
		},
		{
			code: '$("form").append($("input").submit())',
			errors: [ error ]
		}
	]
} );
