'use strict';

const rule = require( '../src/rules/no-each' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer Array#forEach to .each/$.each';

const extendedPattern = '^\\$.|^element$';

const ruleTester = new RuleTester();
ruleTester.run( 'settings', rule, {
	valid: [
		'jq("div").each()',
		'jq.each',
		'div.each()',
		'div.each',
		{
			code: 'jQuery("div").each()',
			settings: { 'no-jquery': { constructorAliases: [ '$' ] } }
		},
		{
			code: 'jQuery.each()',
			settings: { 'no-jquery': { constructorAliases: [ '$' ] } }
		},
		{
			code: '$("div").each()',
			settings: { 'no-jquery': { constructorAliases: [ 'jQuery' ] } }
		},
		{
			code: '$.each()',
			settings: { 'no-jquery': { constructorAliases: [ 'jQuery' ] } }
		},
		'this.element.each()',
		'element.each()'
	],
	invalid: [
		{
			code: 'jQuery("div").each()',
			settings: { 'no-jquery': { constructorAliases: [ '$', 'jQuery' ] } },
			errors: [ error ]
		},
		{
			code: 'jQuery.each()',
			settings: { 'no-jquery': { constructorAliases: [ 'jQuery' ] } },
			errors: [ error ]
		},
		{
			code: 'this.element.each()',
			settings: { 'no-jquery': { variablePattern: extendedPattern } },
			errors: [ error ]
		},
		{
			code: 'element.each()',
			settings: { 'no-jquery': { variablePattern: extendedPattern } },
			errors: [ error ]
		}
	]
} );
