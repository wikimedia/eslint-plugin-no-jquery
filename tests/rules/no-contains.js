'use strict';

const rule = require( '../../src/rules/no-contains' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

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
