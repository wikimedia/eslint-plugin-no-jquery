'use strict';

const rule = require( '../../src/rules/no-is-plain-object' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '$.isPlainObject is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-is-plain-object', rule, {
	valid: [ 'isPlainObject()', 'myClass.isPlainObject()', '$div.isPlainObject()' ],
	invalid: [
		{
			code: '$.isPlainObject()',
			errors: [ error ]
		}
	]
} );
