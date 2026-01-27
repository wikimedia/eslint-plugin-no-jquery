'use strict';

const rule = require( '../../src/rules/no-parse-html' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer DOMImplementation#createHTMLDocument to $.parseHTML';

const ruleTester = new RuleTester();
ruleTester.run( 'no-parse-html', rule, {
	valid: [ 'parseHTML("<b>test</b>")', '"test".parseHTML("<b>test</b>")', '"<b>test</b>".parseHTML' ],
	invalid: [
		'$.parseHTML("<b>test</b>")'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
