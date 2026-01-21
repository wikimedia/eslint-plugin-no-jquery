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
		...[
			'$.data(elem, "foo")',
			'$("div").data("foo", "bar")',
			'$div.data("foo")',
			'$("div").first().data("foo", "bar")',
			'$("div").append($("input").data("foo"))'
		].map( ( code ) => ( { code, errors: [ error ] } ) ),
		...[
			'$.removeData(elem, "foo")',
			'$("div").removeData("foo")',
			'$div.removeData("foo")'
		].map( ( code ) => ( { code, errors: [ removeError ] } ) ),
		...[
			'$.hasData(elem)'
		].map( ( code ) => ( { code, errors: [ hasError ] } ) )
	]
} );
