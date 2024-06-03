'use strict';

const rule = require( '../../src/rules/no-extend' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Object.assign or the spread operator to $.extend';

const ruleTester = new RuleTester();
ruleTester.run( 'no-extend', rule, {
	valid: [
		'extend()',
		'myMethod.extend()',
		'myMethod.extend',
		{
			code: '$.extend(true, {}, foo)',
			options: [ { allowDeep: true } ]
		}
	],
	invalid: [
		{
			code: '$.extend({}, foo)',
			errors: [ error ],
			output: 'Object.assign({}, foo)'
		},
		{
			code: '$.extend(true, {}, foo)',
			errors: [ error ]
		},
		{
			code: '$.extend({}, foo)',
			options: [ { allowDeep: true } ],
			errors: [ error ],
			output: 'Object.assign({}, foo)'
		}
	]
} );
