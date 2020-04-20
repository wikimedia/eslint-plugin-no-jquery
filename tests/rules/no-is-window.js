'use strict';

const rule = require( '../../src/rules/no-is-window' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = '$.isWindow is not allowed';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-is-window', rule, {
	valid: [ 'isWindow()', 'myClass.isWindow()' ],
	invalid: [
		{
			code: '$.isWindow()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
