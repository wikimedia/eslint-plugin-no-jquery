'use strict';

const rule = require( '../../src/rules/no-trigger' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-trigger', rule, {
	valid: [ 'trigger()', '[].trigger()', 'div.trigger()', 'div.trigger' ],
	invalid: [
		'$("div").trigger()',
		'$div.trigger()',
		'$("div").first().trigger()',
		'$("div").append($("input").trigger())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
