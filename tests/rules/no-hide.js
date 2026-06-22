'use strict';

const rule = require( '../../src/rules/no-hide' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-hide', rule, {
	valid: [ 'hide()', '[].hide()', 'div.hide()', 'div.hide' ],
	invalid: [
		'$("div").hide()',
		'$div.hide()',
		'$("div").first().hide()',
		'$("div").append($("input").hide())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
