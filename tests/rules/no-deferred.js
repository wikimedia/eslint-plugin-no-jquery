'use strict';

const rule = require( '../../src/rules/no-deferred' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Promise to $.Deferred';

const ruleTester = new RuleTester();
ruleTester.run( 'no-deferred', rule, {
	valid: [
		'Deferred()',
		'new Deferred()',
		'"test".Deferred()',
		'"test".Deferred'
	],
	invalid: [
		'$.Deferred()',
		'new $.Deferred()'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
