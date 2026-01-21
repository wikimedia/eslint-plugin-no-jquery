'use strict';

const rule = require( '../../src/rules/no-ready' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '.ready is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-ready', rule, {
	valid: [
		'ready(function() { })',
		'ready(()=>{})',
		'ready()',
		'[].ready()',
		'div.ready()',
		'div.ready',
		'$.ready()',
		'$("div")',
		'$(document)',
		'$()'
	],
	invalid: [
		'$(function() { })',
		'$(function init() { })',
		'$(() => {})',
		'$(document).ready(function() { })',
		'$().ready(function() { })',
		'$("img").ready(function() { })',
		'$div.ready(function() { })',
		'$("img").first().ready(function() { })'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
