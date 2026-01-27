'use strict';

const rule = require( '../../src/rules/no-find' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Document#querySelectorAll to .find/$.find';

const ruleTester = new RuleTester();
ruleTester.run( 'no-find', rule, {
	valid: [ 'find()', '[].find()', 'div.find()', 'div.find', '$.extend().find()', '$div.myPlugin("foo").find()' ],
	invalid: [
		'$.find()',
		'$("div").find()',
		'$div.find()',
		'$("div").first().find()',
		'$("div").append($("input").find())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
