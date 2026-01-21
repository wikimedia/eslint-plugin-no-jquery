'use strict';

const rule = require( '../../src/rules/no-contains' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer Node#contains to $.contains';

const ruleTester = new RuleTester();
ruleTester.run( 'no-contains', rule, {
	valid: [ 'contains()', 'myClass.contains()', '$div.contains()' ],
	invalid: [
		'$.contains()'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
