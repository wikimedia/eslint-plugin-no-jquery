'use strict';

const rule = require( '../../src/rules/no-is-numeric' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer typeof to $.isNumeric';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-is-numeric', rule, {
	valid: [ 'isNumeric()', 'myClass.isNumeric()', '$div.isNumeric()' ],
	invalid: [
		{
			code: '$.isNumeric()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
