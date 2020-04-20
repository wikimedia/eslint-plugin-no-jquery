'use strict';

const rule = require( '../../src/rules/no-parse-xml' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer DOMParser#parseFromString to $.parseXML';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-parse-xml', rule, {
	valid: [ 'parseXML()', '"test".parseXML()', '"test".parseXML' ],
	invalid: [
		{
			code: '$.parseXML()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
