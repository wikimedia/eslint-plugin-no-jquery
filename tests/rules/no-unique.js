'use strict';

const rule = require( '../../src/rules/no-unique' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer $.uniqueSort to $.unique';

const ruleTester = new RuleTesterAndDocs();
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
