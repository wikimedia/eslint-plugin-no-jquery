'use strict';

const rule = require( '../../src/rules/no-load' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer fetch to .load';

const ruleTester = new RuleTester();
ruleTester.run( 'no-load', rule, {
	valid: [ 'load()', '[].load()', 'div.load()', 'div.load', '$.load()' ],
	invalid: [
		'$("div").load()',
		'$div.load()',
		'$("div").first().load()',
		'$("div").append($("input").load())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
