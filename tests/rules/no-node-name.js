'use strict';

const rule = require( '../../src/rules/no-node-name' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '$.nodeName is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-node-name', rule, {
	valid: [ 'nodeName()', 'myClass.nodeName()', '$div.nodeName()' ],
	invalid: [
		{
			code: '$.nodeName()',
			errors: [ error ]
		}
	]
} );
