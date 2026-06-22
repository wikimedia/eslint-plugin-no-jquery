'use strict';

const rule = require( '../../src/rules/no-when' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-when', rule, {
	valid: [ 'When()', 'new When()', '"test".when()', '"test".when', '$when()' ],
	invalid: [
		'$.when(a,b)'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
