'use strict';

const rule = require( '../rules/no-contains' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer Node#contains to $.contains';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-contains', rule, {
	valid: [ 'contains()', 'myClass.contains()', '$div.contains()' ],
	invalid: [
		{
			code: '$.contains()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
