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
			errors: [ { messageId: 'default', data: { name: 'dequeue' } } ]
		},
		{
			code: '$.noConflict()',
			errors: [ { messageId: 'default', data: { name: 'noConflict' } } ]
		},
		{
			code: '$.uniqueSort()',
			errors: [ { messageId: 'default', data: { name: 'uniqueSort' } } ]
		},
		{
			code: '$.otherUtil()',
			errors: [ { messageId: 'default', data: { name: 'otherUtil' } } ]
		}
	]
} );
