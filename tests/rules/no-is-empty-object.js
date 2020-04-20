'use strict';

const rule = require( '../../src/rules/no-is-empty-object' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = '$.isEmptyObject is not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-is-empty-object', rule, {
	valid: [ 'isEmptyObject()', 'myClass.isEmptyObject()', '$div.isEmptyObject()' ],
	invalid: [
		{
			code: '$.isEmptyObject()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
