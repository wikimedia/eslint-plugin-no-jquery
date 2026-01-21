'use strict';

const rule = require( '../../src/rules/no-is-empty-object' );
const RuleTester = require( '../../tools/rule-tester' );

const error = '$.isEmptyObject is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-is-empty-object', rule, {
	valid: [ 'isEmptyObject()', 'myClass.isEmptyObject()', '$div.isEmptyObject()' ],
	invalid: [
		'$.isEmptyObject()'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
