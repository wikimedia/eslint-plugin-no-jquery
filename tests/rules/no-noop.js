'use strict';

const rule = require( '../../src/rules/no-noop' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer function(){} to $.noop';

const ruleTester = new RuleTester();
ruleTester.run( 'no-noop', rule, {
	valid: [ 'foo.noop', 'foo.noop()', 'foo.noop(bar)', '$.noOp' ],
	invalid: [
		{
			code: '$.noop',
			errors: [ error ],
			output: '(function(){})'
		},
		{
			code: '$.noop()',
			errors: [ error ],
			output: '(function(){})()'
		}
	]
} );
