'use strict';

const rule = require( '../rules/no-noop' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer function(){} to $.noop';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-noop', rule, {
	valid: [ 'foo.noop', 'foo.noop()', 'foo.noop(bar)' ],
	invalid: [
		{
			code: '$.noop',
			errors: [ { message: error, type: 'MemberExpression' } ],
			output: '(function(){})'
		},
		{
			code: '$.noop()',
			errors: [ { message: error, type: 'MemberExpression' } ],
			output: '(function(){})()'
		}
	]
} );
