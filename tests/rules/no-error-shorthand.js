'use strict';

const rule = require( '../../src/rules/no-error-shorthand' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer .on or .trigger to .error';

const ruleTester = new RuleTester();
ruleTester.run( 'no-error-shorthand', rule, {
	valid: [ 'error()', '[].error()', 'div.error()', 'div.error', '$.error()' ],
	invalid: [
		{
			code: '$("div").error(handler)',
			errors: [ error ],
			output: '$("div").on("error", handler)'
		},
		{
			code: '$div.error()',
			errors: [ error ],
			output: '$div.trigger("error")'
		},
		{
			code: '$("div").first().error()',
			errors: [ error ],
			output: '$("div").first().trigger("error")'
		},
		{
			code: '$("div").append($("input").error())',
			errors: [ error ],
			output: '$("div").append($("input").trigger("error"))'
		}
	]
} );
