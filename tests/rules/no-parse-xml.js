'use strict';

const rule = require( '../../src/rules/no-parse-xml' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer DOMParser#parseFromString to $.parseXML';

const ruleTester = new RuleTester();
ruleTester.run( 'no-parse-xml', rule, {
	valid: [ 'parseXML("<b>test</b>")', '"test".parseXML("<b>test</b>")', '"<b>test</b>".parseXML' ],
	invalid: [
		{
			code: '$.parseXML("<b>test</b>")',
			output: '( new window.DOMParser() ).parseFromString("<b>test</b>", "text/xml")'
		},
		// Can't fix if no arguments are passed
		{
			code: '$.parseXML()',
			docgen: false
		}
	].map( ( obj ) => ( { ...obj, errors: [ error ] } ) )
} );
