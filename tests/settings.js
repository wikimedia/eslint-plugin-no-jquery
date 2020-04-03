'use strict';

const rule = require( '../rules/no-each' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer Array#forEach to .each/$.each';

const extendedPattern = '^\\$.|^element$';

const ruleTester = new RuleTesterAndDocs();
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
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: 'jQuery.each()',
			settings: { 'no-jquery': { constructorAliases: [ 'jQuery' ] } },
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: 'this.element.each()',
			settings: { 'no-jquery': { variablePattern: extendedPattern } },
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: 'element.each()',
			settings: { 'no-jquery': { variablePattern: extendedPattern } },
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
