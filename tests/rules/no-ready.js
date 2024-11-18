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
		{
			code: '$(function() { })',
			errors: [ error ]
		},
		{
			code: '$(function init() { })',
			errors: [ error ]
		},
		{
			code: '$(() => {})',
			errors: [ error ]
		},
		{
			code: '$(document).ready(function() { })',
			errors: [ error ]
		},
		{
			code: '$().ready(function() { })',
			errors: [ error ]
		},
		{
			code: '$("img").ready(function() { })',
			errors: [ error ]
		},
		{
			code: '$div.ready(function() { })',
			errors: [ error ]
		},
		{
			code: '$("img").first().ready(function() { })',
			errors: [ error ]
		}
	]
} );
