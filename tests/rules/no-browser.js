'use strict';

const rule = require( '../../src/rules/no-browser' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-browser', rule, {
	valid: [ 'browser', 'a.browser', 'browser.foo', 'a.browser.foo', '$.browsers' ],
	invalid: [
		'$.browser',
		'$.browser.style'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
