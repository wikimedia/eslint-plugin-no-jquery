'use strict';

const rule = require( '../rules/no-grep' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

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
