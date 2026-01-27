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
			output: '$("div").on("unload", handler)'
		},
		{
			code: '$div.unload()',
			output: '$div.trigger("unload")'
		},
		{
			code: '$("div").first().unload()',
			output: '$("div").first().trigger("unload")'
		},
		{
			code: '$("div").append($("input").unload())',
			output: '$("div").append($("input").trigger("unload"))'
		}
	].map( ( obj ) => ( { ...obj, errors: [ error ] } ) )
} );
