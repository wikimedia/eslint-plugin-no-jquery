'use strict';

const rule = require( '../../src/rules/no-each' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-each', rule, {
	valid: [ 'each()', '[].each()', 'div.each()', 'div.each' ],
	invalid: [
		'$.each()',
		'$("div").each()',
		'$div.each()',
		'$("div").first().each()',
		'$("div").append($("input").each())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
