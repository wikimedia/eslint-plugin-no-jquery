'use strict';

const rule = require( '../../src/rules/no-on-ready' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '.on("ready") is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-on-ready', rule, {
	valid: [
		'$(document).on("click", function(){})',
		'$(document).on()',
		'$document.on("click", function(){})',
		'$document.on()',
		'$document.on(ready)',
		'$document.on(ready())',
		'$document.ready()',
		'$(function(){})',
		'document.on("ready")',
		'document.on("ready", function(){})'
	],
	invalid: [
		{
			code: '$(document).on("ready", function(){})',
			output: '$(document).ready(function(){})'
		},
		{
			code: '$document.on("ready", function(){})',
			output: '$document.ready(function(){})'
		},
		{
			code: '$document.on("ready")',
			docgen: false
		}
	].map( ( obj ) => ( { ...obj, errors: [ error ] } ) )
} );
