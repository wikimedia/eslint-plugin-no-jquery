'use strict';

const rule = require( '../../src/rules/no-unique' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer $.uniqueSort to $.unique';

const ruleTester = new RuleTester();
ruleTester.run( 'no-unique', rule, {
	valid: [ 'unique()', '"test".unique()', '"test".unique' ],
	invalid: [
		{
			code: '$.unique( [] )',
			errors: [ { message: error, type: 'CallExpression' } ],
			output: '$.uniqueSort( [] )'
		}
	]
} );
