'use strict';

const rule = require( '../../src/rules/no-parse-json' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer JSON.parse to $.parseJSON';

const ruleTester = new RuleTester();
ruleTester.run( 'no-parse-json', rule, {
	valid: [ 'parseJSON()', '$div.parseJSON()', '"test".parseJSON' ],
	invalid: [
		{
			code: '$.parseJSON("{}")',
			errors: [ error ],
			output: 'JSON.parse("{}")'
		}
	]
} );
