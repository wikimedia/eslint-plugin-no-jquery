'use strict';

const rule = require( '../../src/rules/no-map' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Array#map to .map/$.map';

const ruleTester = new RuleTester();
ruleTester.run( 'no-map', rule, {
	valid: [ 'map()', '[].map()', 'div.map()', 'div.map;', '$("div").toArray().map()', '$("select").val().map()' ],
	invalid: [
		'$.map()',
		'$("div").map()',
		'$div.map()',
		'$("div").first().map()',
		'$("div").append($("input").map())',
		'$("select").val([]).map()'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
