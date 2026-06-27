'use strict';

const rule = require( '../../src/rules/no-css-number' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-css-number', rule, {
	valid: [ 'cssNumber', 'a.cssNumber', 'cssNumber.foo', 'a.cssNumber.foo' ],
	invalid: [
		'$.cssNumber',
		'$.cssNumber.zIndex'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
