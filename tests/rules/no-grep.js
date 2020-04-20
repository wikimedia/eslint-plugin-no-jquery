'use strict';

const rule = require( '../../src/rules/no-grep' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer Array#filter to $.grep';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-grep', rule, {
	valid: [ 'grep()', '"test".grep()', '"test".grep' ],
	invalid: [
		{
			code: '$.grep()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
