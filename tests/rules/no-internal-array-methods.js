'use strict';

const rule = require( '../../src/rules/no-internal-array-methods' );
const RuleTester = require( '../../tools/rule-tester' );

const pushError = { messageId: 'default', data: { name: 'push' } };
const sortError = { messageId: 'default', data: { name: 'sort' } };
const spliceError = { messageId: 'default', data: { name: 'splice' } };

const ruleTester = new RuleTester();
ruleTester.run( 'no-internal-array-methods', rule, {
	valid: [
		'push()',
		'[].push()',
		'div.push()',
		'div.push',

		'sort()',
		'[].sort()',
		'div.sort()',
		'div.sort',

		'splice()',
		'[].splice()',
		'div.splice()',
		'div.splice'
	],
	invalid: [
		...[
			'$("div").push(div)',
			'$div.push(div)',
			'$("div").first().push(div)',
			'$("div").append($("input").push(div))'
		].map( ( code ) => ( { code, errors: [ pushError ] } ) ),
		...[
			'$("div").sort()',
			'$div.sort()',
			'$("div").first().sort()',
			'$("div").append($("input").sort())'
		].map( ( code ) => ( { code, errors: [ sortError ] } ) ),
		...[
			'$("div").splice(0, 1)',
			'$div.splice(0, 1)',
			'$("div").first().splice(0, 1)',
			'$("div").append($("input").splice(0, 1))'
		].map( ( code ) => ( { code, errors: [ spliceError ] } ) )
	]
} );
