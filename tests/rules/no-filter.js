'use strict';

const rule = require( '../../src/rules/no-filter' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Array#filter to .filter/$.filter';

const ruleTester = new RuleTester();
ruleTester.run( 'no-filter', rule, {
	valid: [ 'filter()', '[].filter()', 'div.filter()', 'div.filter' ],
	invalid: [
		'$.filter()',
		'$("div").filter()',
		'$div.filter()',
		'$("div").first().filter()',
		'$("div").append($("input").filter())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
