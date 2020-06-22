'use strict';

const rule = require( '../../src/rules/no-jquery-constructor' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'The jQuery constructor is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-jquery-constructor', rule, {
	valid: [
		'foo.$(".selector")',
		'foo.$("<div>")',
		'foo.jQuery(".selector")',
		'foo.jQuery("<div>")',
		'$',
		'jQuery'
	],
	invalid: [
		'$("div")',
		'$("#id")',
		'$(".selector")',
		'$(".selector", ".context")',
		'$(function(){})',
		'$([])',
		'$(undefined)',
		'$(false)',
		'jQuery("div")'
	].map(
		( test ) => Object.assign( {
			errors: [ error ]
		}, typeof test === 'string' ? { code: test } : test )
	)
} );
