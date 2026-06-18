'use strict';

const rule = require( '../../src/rules/no-now' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-now', rule, {
	valid: [ 'now()', 'myClass.now()', '$div.now()' ],
	invalid: [
		{
			code: '$.now()',
			output: 'Date.now()'
		}
	].map( ( obj ) => ( { ...obj, errors: [ error ] } ) )
} );
