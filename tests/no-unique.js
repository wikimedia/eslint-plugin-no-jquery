'use strict';

const rule = require( '../rules/no-unique' );
const RuleTester = require( 'eslint' ).RuleTester;

const error = 'Prefer $.uniqueSort to $.unique';

const ruleTester = new RuleTester();
ruleTester.run( 'no-in-array', rule, {
	valid: [ 'unique()', '"test".unique()', '"test".unique' ],
	invalid: [
		{
			code: '$.unique()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
