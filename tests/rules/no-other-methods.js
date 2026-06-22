'use strict';

const rule = require( '../../src/rules/no-other-methods' );
const RuleTester = require( '../../tools/rule-tester' );

const ruleTester = new RuleTester();
ruleTester.run( 'no-other-methods', rule, {
	valid: [
		'$div.each()',
		'$div.find()',
		'$div.map()',
		'$div.otherProperty',
		'div.otherMethod()',
		'$.otherUtil()',
		'method()'
	],
	invalid: [
		{
			code: '$div.add()',
			errors: [ { messageId: 'default', data: { name: 'add' } } ]
		},
		{
			code: '$div.height()',
			errors: [ { messageId: 'default', data: { name: 'height' } } ]
		},
		{
			code: '$div.prepend()',
			errors: [ { messageId: 'default', data: { name: 'prepend' } } ]
		},
		{
			code: '$div.otherMethod()',
			errors: [ { messageId: 'default', data: { name: 'otherMethod' } } ]
		}
	]
} );
