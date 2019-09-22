'use strict';

const rule = require( '../rules/no-is-numeric' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

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
