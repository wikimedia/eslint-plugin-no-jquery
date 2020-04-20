'use strict';

const rule = require( '../../src/rules/no-is-plain-object' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = '$.isPlainObject is not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-is-plain-object', rule, {
	valid: [ 'isPlainObject()', 'myClass.isPlainObject()', '$div.isPlainObject()' ],
	invalid: [
		{
			code: '$.isPlainObject()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
