'use strict';

const rule = require( '../rules/no-camel-case' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = '$.camelCase is not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-camel-case', rule, {
	valid: [ 'camelCase()', 'myClass.camelCase()', '$div.camelCase()' ],
	invalid: [
		{
			code: '$.camelCase()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
