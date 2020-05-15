'use strict';

const rule = require( '../../src/rules/no-grep' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Array#filter to $.grep';

const ruleTester = new RuleTester();
ruleTester.run( 'no-grep', rule, {
	valid: [ 'grep()', '"test".grep()', '"test".grep' ],
	invalid: [
		{
			code: '$.grep()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
