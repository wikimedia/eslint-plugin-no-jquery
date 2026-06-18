'use strict';

const rule = require( '../../src/rules/no-global-eval' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-global-eval', rule, {
	valid: [ 'globalEval()', '"test".globalEval()', '"test".globalEval' ],
	invalid: [
		'$.globalEval()'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
