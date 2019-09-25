'use strict';

const rule = require( '../rules/no-extend' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer Object.assign or the spread operator to $.extend';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-extend', rule, {
	valid: [ 'extend()', 'myMethod.extend()', 'myMethod.extend' ],
	invalid: [
		{
			code: '$.extend()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
