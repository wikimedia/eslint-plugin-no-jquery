'use strict';

const rule = require( '../../src/rules/no-sub' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-sub', rule, {
	valid: [ 'sub()', '"test".sub()', '"test".sub' ],
	invalid: [
		'$.sub()'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
