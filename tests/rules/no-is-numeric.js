'use strict';

const rule = require( '../../src/rules/no-is-numeric' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer typeof to $.isNumeric';

const ruleTester = new RuleTester();
ruleTester.run( 'no-is-numeric', rule, {
	valid: [ 'isNumeric()', 'myClass.isNumeric()', '$div.isNumeric()' ],
	invalid: [
		{
			code: '$.isNumeric()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
