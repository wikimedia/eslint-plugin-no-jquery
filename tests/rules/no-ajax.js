'use strict';

const rule = require( '../../src/rules/no-ajax' );
const RuleTester = require( '../../tools/rule-tester' );

const ajaxError = 'Prefer Window.fetch to $.ajax';
const getError = 'Prefer Window.fetch to $.get';
const jsonError = 'Prefer Window.fetch to $.getJSON';
const scriptError = 'Prefer Window.fetch to $.getScript';
const postError = 'Prefer Window.fetch to $.post';

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
