'use strict';

const rule = require( '../../src/rules/no-extend' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-extend', rule, {
	valid: [
		'extend()',
		'myMethod.extend()',
		'myMethod.extend',
		{
			code: '$.extend(true, {}, foo)',
			options: [ { allowDeep: true } ]
		},
		'$.extend({myUtil:fn})'
	],
	invalid: [
		{
			code: '$.extend({}, foo)'
		},
		{
			code: '$.extend(true, {}, foo)'
		},
		{
			code: '$.extend({}, foo)',
			options: [ { allowDeep: true } ]
		},
		{
			code: '$.extend(fooCouldBeNull, doesNotAutofix)',
			options: [ { allowDeep: true } ]
		},
		{
			code: '$.extend({ disabletalk: true }, { disabletalk: undefined })',
			docgen: false
		},
		{
			code: '$.extend({ disabletalk: true }, { disabletalk: undefined })',
			options: [ { allowDeep: true } ],
			docgen: false
		},
		{
			code: 'const options = { disabletalk: undefined }; $.extend({ disabletalk: true }, options)',
			docgen: false
		},
		{
			code: 'jQuery.extend({ disabletalk: true }, { disabletalk: undefined })',
			docgen: false
		}
	].map( ( obj ) => ( { ...obj, errors: [ error ], output: null } ) )
} );
