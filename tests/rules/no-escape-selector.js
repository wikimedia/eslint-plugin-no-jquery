'use strict';

const rule = require( '../../src/rules/no-escape-selector' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-escape-selector', rule, {
	valid: [ 'escapeSelector(".foo>")', 'myClass.escapeSelector(".foo>")', '$div.escapeSelector(".foo>")' ],
	invalid: [
		{
			code: '$.escapeSelector(".foo>")',
			errors: [ error ],
			output: 'CSS.escape(".foo>")'
		}
	]
} );
