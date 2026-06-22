'use strict';

const rule = require( '../../src/rules/no-ajax' );
const RuleTester = require( '../../tools/rule-tester' );

const ajaxError = { messageId: 'default', data: { name: 'ajax' } };
const getError = { messageId: 'default', data: { name: 'get' } };
const jsonError = { messageId: 'default', data: { name: 'getJSON' } };
const scriptError = { messageId: 'default', data: { name: 'getScript' } };
const postError = { messageId: 'default', data: { name: 'post' } };

const ruleTester = new RuleTester();
ruleTester.run( 'no-ajax', rule, {
	valid: [
		'ajax()',
		'div.ajax()',
		'div.ajax',

		'get()',
		'div.get()',
		'div.get',

		'getJSON()',
		'div.getJSON()',
		'div.getJSON',

		'getScript()',
		'div.getScript()',
		'div.getScript',

		'post()',
		'div.post()',
		'div.post'
	],
	invalid: [
		...[
			'$.ajax()'
		].map( ( code ) => ( { code, errors: [ ajaxError ] } ) ),
		...[
			'$.get()'
		].map( ( code ) => ( { code, errors: [ getError ] } ) ),
		...[
			'$.getJSON()'
		].map( ( code ) => ( { code, errors: [ jsonError ] } ) ),
		...[
			'$.getScript()'
		].map( ( code ) => ( { code, errors: [ scriptError ] } ) ),
		...[
			'$.post()'
		].map( ( code ) => ( { code, errors: [ postError ] } ) )
	]
} );
