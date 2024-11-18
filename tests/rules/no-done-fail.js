'use strict';

const rule = require( '../../src/rules/no-done-fail' );
const RuleTester = require( '../../tools/rule-tester' );

const error = ( method ) => `Prefer .then to .${ method }`;

const ruleTester = new RuleTester();
ruleTester.run( 'no-done-fail', rule, {
	valid: [ 'promise.then( doneCallback, failCallback )', 'done()', 'fail()' ],
	invalid: [
		{
			code: 'promise.done( callback )',
			errors: [ error( 'done' ) ]
		},
		{
			code: 'promise.fail( callback )',
			errors: [ error( 'fail' ) ]
		}
	]
} );
