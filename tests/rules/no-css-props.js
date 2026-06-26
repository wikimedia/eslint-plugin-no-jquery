'use strict';

const rule = require( '../../src/rules/no-css-props' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-css-props', rule, {
	valid: [ 'cssProps', 'a.cssProps', 'cssProps.foo', 'a.cssProps.foo' ],
	invalid: [
		'$.cssProps',
		'$.cssProps.float'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
