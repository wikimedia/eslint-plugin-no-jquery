'use strict';

const rule = require( '../../src/rules/no-unload-shorthand' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer .on or .trigger to .unload';

const ruleTester = new RuleTester();
ruleTester.run( 'no-unload-shorthand', rule, {
	valid: [
		'unload()',
		'[].unload()',
		'div.unload()',
		'div.unload',
		'$.unload()'
	],
	invalid: [
		{
			code: '$("div").unload(handler)',
			errors: [ error ],
			output: '$("div").on("unload", handler)'
		},
		{
			code: '$div.unload()',
			errors: [ error ],
			output: '$div.trigger("unload")'
		},
		{
			code: '$("div").first().unload()',
			errors: [ error ],
			output: '$("div").first().trigger("unload")'
		},
		{
			code: '$("div").append($("input").unload())',
			errors: [ error ],
			output: '$("div").append($("input").trigger("unload"))'
		}
	]
} );
