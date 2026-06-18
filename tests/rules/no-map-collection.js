'use strict';

const rule = require( '../../src/rules/no-map-collection' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-map-collection', rule, {
	valid: [ 'map()', '[].map()', 'div.map()', 'div.map', '$.map()', '$("select").val().map()' ],
	invalid: [
		'$("div").map()',
		'$div.map()',
		'$("div").first().map()',
		'$("div").append($("input").map())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
