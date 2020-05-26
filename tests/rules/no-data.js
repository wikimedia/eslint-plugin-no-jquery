'use strict';

const rule = require( '../../src/rules/no-data' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer WeakMap to .data/$.data';
const removeError = 'Prefer WeakMap to .removeData/$.removeData';
const hasError = 'Prefer WeakMap to .hasData/$.hasData';

const ruleTester = new RuleTester();
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
			errors: [ error ]
		},
		{
			code: '$("div").data("foo", "bar")',
			errors: [ error ]
		},
		{
			code: '$div.data("foo")',
			errors: [ error ]
		},
		{
			code: '$("div").first().data("foo", "bar")',
			errors: [ error ]
		},
		{
			code: '$("div").append($("input").data("foo"))',
			errors: [ error ]
		},
		{
			code: '$.removeData(elem, "foo")',
			errors: [ removeError ]
		},
		{
			code: '$("div").removeData("foo")',
			errors: [ removeError ]
		},
		{
			code: '$div.removeData("foo")',
			errors: [ removeError ]
		},
		{
			code: '$.hasData(elem)',
			errors: [ hasError ]
		}
	]
} );
