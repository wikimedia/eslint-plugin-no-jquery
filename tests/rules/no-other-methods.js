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
			errors: [ '.add is not allowed' ]
		},
		{
			code: '$div.height()',
			errors: [ '.height is not allowed' ]
		},
		{
			code: '$div.prepend()',
			errors: [ '.prepend is not allowed' ]
		},
		{
			code: '$div.otherMethod()',
			errors: [ '.otherMethod is not allowed' ]
		}
	]
} );
