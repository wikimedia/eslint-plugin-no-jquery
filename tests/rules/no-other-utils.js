'use strict';

const rule = require( '../../src/rules/no-other-utils' );
const RuleTester = require( '../../tools/rule-tester' );

const ruleTester = new RuleTester();
ruleTester.run( 'no-other-utils', rule, {
	valid: [
		'$.each()',
		'$.find()',
		'$.map()',
		'$.otherProperty',
		'$div.otherMethod()',
		'method()'
	],
	invalid: [
		{
			code: '$.dequeue()',
			errors: [ { messageId: 'notAllowed' } ]
		},
		{
			code: '$.noConflict()',
			errors: [ { messageId: 'notAllowed' } ]
		},
		{
			code: '$.uniqueSort()',
			errors: [ { messageId: 'notAllowed' } ]
		},
		{
			code: '$.otherUtil()',
			errors: [ { messageId: 'notAllowed' } ]
		}
	]
} );
