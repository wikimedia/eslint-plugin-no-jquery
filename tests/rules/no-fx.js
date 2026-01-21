'use strict';

const rule = require( '../../src/rules/no-fx' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '$.fx is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-fx', rule, {
	valid: [ 'fx', 'fx.interval', 'a.fx' ],
	invalid: [
		'$.fx',
		'$.fx.interval',
		'$.fx.off',
		'$.fx.speeds.slow',
		'$.fx.start()'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
