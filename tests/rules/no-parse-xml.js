'use strict';

const rule = require( '../../src/rules/no-parse-xml' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer DOMParser#parseFromString to $.parseXML';

const ruleTester = new RuleTester();
ruleTester.run( 'no-parse-xml', rule, {
	valid: [ 'parseXML()', '"test".parseXML()', '"test".parseXML' ],
	invalid: [
		{
			code: '$.parseXML()',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
