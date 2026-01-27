'use strict';

const rule = require( '../../src/rules/no-camel-case' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '$.camelCase is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-camel-case', rule, {
	valid: [ 'camelCase()', 'myClass.camelCase()', '$div.camelCase()' ],
	invalid: [
		'$.camelCase()'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
