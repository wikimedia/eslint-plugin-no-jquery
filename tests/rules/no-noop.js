'use strict';

const rule = require( '../../src/rules/no-noop' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-noop', rule, {
	valid: [ 'foo.noop', 'foo.noop()', 'foo.noop(bar)', '$.noOp' ],
	invalid: [
		{
			code: '$.noop',
			output: '(function(){})'
		},
		{
			code: '$.noop()',
			output: '(function(){})()'
		}
	].map( ( obj ) => ( { ...obj, errors: [ error ] } ) )
} );
