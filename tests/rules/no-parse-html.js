'use strict';

const rule = require( '../../src/rules/no-parse-html' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer DOMImplementation#createHTMLDocument to $.parseHTML';

const ruleTester = new RuleTester();
ruleTester.run( 'no-parse-html', rule, {
	valid: [ 'parseHTML()', '"test".parseHTML()', '"test".parseHTML' ],
	invalid: [
		{
			code: '$.parseHTML()',
			errors: [ error ]
		}
	]
} );
