'use strict';

const rule = require( '../../src/rules/no-find-collection' );
const RuleTesterAndDocs = require( '../../tools/rule-tester-and-docs' );

const error = 'Prefer Document#querySelectorAll to .find';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-find-collection', rule, {
	valid: [ '$.find()', 'find()', '[].find()', 'div.find()', 'div.find', '$.extend().find()', '$div.myPlugin("foo").find()' ],
	invalid: [
		{
			code: '$("div").find()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.find()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().find()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").find())',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
