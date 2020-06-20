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
			errors: [ '$.dequeue is not allowed' ]
		},
		{
			code: '$.noConflict()',
			errors: [ '$.noConflict is not allowed' ]
		},
		{
			code: '$.uniqueSort()',
			errors: [ '$.uniqueSort is not allowed' ]
		},
		{
			code: '$.otherUtil()',
			errors: [ '$.otherUtil is not allowed' ]
		}
	]
} );
