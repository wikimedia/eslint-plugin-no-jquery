'use strict';

const rule = require( '../../src/rules/no-html' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Element#innerHTML to .html';

const ruleTester = new RuleTester();
ruleTester.run( 'no-html', rule, {
	valid: [
		'html()',
		'[].html()',
		'div.html()',
		'div.html',
		{
			code: '$div.html()',
			options: [ { allowGetOrSet: 'get' } ]
		},
		{
			code: '$div.html("<br>")',
			options: [ { allowGetOrSet: 'set' } ]
		}
	],
	invalid: [
		{
			code: '$("div").html()'
		},
		{
			code: '$div.html()'
		},
		{
			code: '$div.html()',
			options: [ { allowGetOrSet: 'set' } ]
		},
		{
			code: '$div.html("<br>")',
			options: [ { allowGetOrSet: 'get' } ]
		},
		{
			code: '$("div").first().html()'
		},
		{
			code: '$("div").append($("input").html())'
		}
	].map( ( obj ) => ( { ...obj, errors: [ error ] } ) )
} );
