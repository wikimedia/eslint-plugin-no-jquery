'use strict';

const rule = require( '../../src/rules/no-serialize' );
const RuleTester = require( '../../tools/rule-tester' );

const serializeError = { messageId: 'default', data: { name: 'serialize' } };
const arrayError = { messageId: 'default', data: { name: 'serializeArray' } };

const ruleTester = new RuleTester();
ruleTester.run( 'no-serialize', rule, {
	valid: [
		'serialize()',
		'[].serialize()',
		'div.serialize()',
		'div.serialize',

		'serializeArray()',
		'[].serializeArray()',
		'div.serializeArray()',
		'div.serializeArray'
	],
	invalid: [
		...[
			'$("div").serialize()',
			'$div.serialize()',
			'$("div").first().serialize()',
			'$("div").append($("input").serialize())'
		].map( ( code ) => ( { code, errors: [ serializeError ] } ) ),
		...[
			'$("div").serializeArray()',
			'$div.serializeArray()',
			'$("div").first().serializeArray()',
			'$("div").append($("input").serializeArray())'
		].map( ( code ) => ( { code, errors: [ arrayError ] } ) )
	]
} );
