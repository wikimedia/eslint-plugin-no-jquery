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
			errors: [ { messageId: 'notAllowed' } ]
		},
		{
			code: '$div.height()',
			errors: [ { messageId: 'notAllowed' } ]
		},
		{
			code: '$div.prepend()',
			errors: [ { messageId: 'notAllowed' } ]
		},
		{
			code: '$div.otherMethod()',
			errors: [ { messageId: 'notAllowed' } ]
		}
	]
} );
