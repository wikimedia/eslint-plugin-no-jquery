'use strict';

const rule = require( '../rules/no-data' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Prefer WeakMap to data';
const removeError = 'Prefer WeakMap to removeData';
const hasError = 'Prefer WeakMap to hasData';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-data', rule, {
	valid: [
		'data()',
		'[].data()',
		'div.data()',
		'div.data',

		'removeData()',
		'[].removeData()',
		'div.removeData()',
		'div.removeData',

		'hasData()',
		'[].hasData()',
		'div.hasData()',
		'div.hasData'
		// TODO: Technically $div.hasData should be allowed as $.hasData
		// only exists as a utility, but as we are using createCollectionOrUtilMethodRule
		// the non-existant method is disallowed as well.
	],
	invalid: [
		{
			code: '$.data(elem, "foo")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").data("foo", "bar")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.data("foo")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().data("foo", "bar")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").data("foo"))',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$.removeData(elem, "foo")',
			errors: [ { message: removeError, type: 'CallExpression' } ]
		},
		{
			code: '$("div").removeData("foo")',
			errors: [ { message: removeError, type: 'CallExpression' } ]
		},
		{
			code: '$div.removeData("foo")',
			errors: [ { message: removeError, type: 'CallExpression' } ]
		},
		{
			code: '$.hasData(elem)',
			errors: [ { message: hasError, type: 'CallExpression' } ]
		}
	]
} );
