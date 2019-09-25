'use strict';

const rule = require( '../rules/no-parse-html' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer DOMImplementation#createHTMLDocument to $.parseHTML';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-parse-html', rule, {
	valid: [ 'parseHTML()', '"test".parseHTML()', '"test".parseHTML' ],
	invalid: [
		{
			code: '$.parseHTML()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
