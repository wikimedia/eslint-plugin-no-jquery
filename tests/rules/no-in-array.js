'use strict';

const rule = require( '../../src/rules/no-in-array' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Array#indexOf to $.inArray';

const ruleTester = new RuleTester();
ruleTester.run( 'no-in-array', rule, {
	valid: [ 'inArray()', '"test".inArray()', '"test".inArray' ],
	invalid: [
		'$.inArray()'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
