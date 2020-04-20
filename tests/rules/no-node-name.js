'use strict';

const rule = require( '../../src/rules/no-node-name' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = '$.nodeName is not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-node-name', rule, {
	valid: [ 'nodeName()', 'myClass.nodeName()', '$div.nodeName()' ],
	invalid: [
		{
			code: '$.nodeName()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
