'use strict';

const rule = require( '../../src/rules/no-error' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer throw to $.error';

const ruleTester = new RuleTester();
ruleTester.run( 'no-error', rule, {
	valid: [ 'nodeName()', 'myClass.nodeName()', '$div.nodeName()' ],
	invalid: [
		{
			code: '$.error()',
			errors: [ error ]
		}
	]
} );
