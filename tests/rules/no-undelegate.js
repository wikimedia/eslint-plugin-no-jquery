'use strict';

const rule = require( '../../src/rules/no-undelegate' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-undelegate', rule, {
	valid: [
		'undelegate()',
		'[].undelegate()',
		'div.undelegate()',
		'div.undelegate'
	],
	invalid: [
		'$("div").undelegate()',
		'$div.undelegate()',
		'$("div").first().undelegate()',
		'$("div").append($("input").undelegate())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
