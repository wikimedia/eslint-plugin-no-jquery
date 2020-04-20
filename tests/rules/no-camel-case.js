'use strict';

const rule = require( '../../src/rules/no-camel-case' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

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
