'use strict';

const rule = require( '../../src/rules/no-support' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-support', rule, {
	valid: [ 'support', 'a.support', 'support.foo', 'a.support.foo' ],
	invalid: [
		'$.support',
		'$.support.style'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
