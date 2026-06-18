'use strict';

const rule = require( '../../src/rules/no-grep' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-grep', rule, {
	valid: [ 'grep()', '"test".grep()', '"test".grep' ],
	invalid: [
		'$.grep()'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
