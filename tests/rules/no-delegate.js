'use strict';

const rule = require( '../../src/rules/no-delegate' );
const RuleTester = require( '../../tools/rule-tester' );

const delegateError = { messageId: 'delegate' };
const undelegateError = { messageId: 'undelegate' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-delegate', rule, {
	valid: [
		'delegate()',
		'[].delegate()',
		'div.delegate()',
		'div.delegate',

		'undelegate()',
		'[].undelegate()',
		'div.undelegate()',
		'div.undelegate'
	],
	invalid: [
		...[
			'$("div").delegate()',
			'$div.delegate()',
			'$("div").first().delegate()',
			'$("div").append($("input").delegate())'
		].map( ( code ) => ( { code, errors: [ delegateError ] } ) ),
		...[
			'$("div").undelegate()',
			'$div.undelegate()',
			'$("div").first().undelegate()',
			'$("div").append($("input").undelegate())'
		].map( ( code ) => ( { code, errors: [ undelegateError ] } ) )
	]
} );
