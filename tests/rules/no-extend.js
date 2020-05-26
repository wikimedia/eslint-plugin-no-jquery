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
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$.extend(true, {}, foo)',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$.extend({}, foo)',
			options: [ { allowDeep: true } ],
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
