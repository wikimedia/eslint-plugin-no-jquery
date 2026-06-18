'use strict';

const rule = require( '../../src/rules/no-deferred-get-stack-hook' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '$.Deferred.getStackHook is not allowed. Use $.Deferred.getErrorHook instead.';

const ruleTester = new RuleTester();
ruleTester.run( 'no-deferred-get-stack-hook', rule, {
	valid: [
		'getStackHook',
		'Deferred.getStackHook',
		'$.Deferred',
		'$.Deferred()',
		'$.getStackHook',
		'foo.Deferred.getStackHook',
		'$.Other.getStackHook'
	],
	invalid: [
		'$.Deferred.getStackHook',
		'$.Deferred.getStackHook = fn',
		'jQuery.Deferred.getStackHook'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
