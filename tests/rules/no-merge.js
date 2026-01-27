'use strict';

const rule = require( '../../src/rules/no-merge' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Array#concat to $.merge';

const ruleTester = new RuleTester();
ruleTester.run( 'no-merge', rule, {
	valid: [ 'merge()', '"test".merge()', '"test".merge' ],
	invalid: [
		'$.merge()'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
