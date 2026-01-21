'use strict';

const rule = require( '../../src/rules/no-param' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer FormData or URLSearchParams to $.param';

const ruleTester = new RuleTester();
ruleTester.run( 'no-param', rule, {
	valid: [ 'param()', '"test".param()', '"test".param' ],
	invalid: [
		'$.param()'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
