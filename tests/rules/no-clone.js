'use strict';

const rule = require( '../../src/rules/no-clone' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Node#cloneNode to .clone/$.clone';

const ruleTester = new RuleTester();
ruleTester.run( 'no-clone', rule, {
	valid: [
		'clone()',
		'[].clone()',
		'div.clone()',
		'div.clone',
		'$div.prop.clone()',
		{
			code: '$div["prop"].clone()',
			docgen: false
		},
		'$div[0].clone()'
	],
	invalid: [
		'$.clone()',
		'$("div").clone()',
		'$div.clone()',
		'this.prop.$div.clone()',
		'$("div").first().clone()',
		'$("div").append($("input").clone())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
