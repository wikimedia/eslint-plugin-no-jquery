'use strict';

const rule = require( '../../src/rules/no-prop' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer direct property access to .prop/$.prop';
const errorRemove = 'Prefer direct property access to .removeProp/$.removeProp';

const ruleTester = new RuleTester();
ruleTester.run( 'no-prop', rule, {
	valid: [ 'prop()', '[].prop()', 'div.prop()', 'div.prop', 'removeProp()', 'div.removeProp()' ],
	invalid: [
		...[
			'$.prop()',
			'$("div").prop()',
			'$div.prop()',
			'$("div").first().prop()',
			'$("div").append($("input").prop())'
		].map( ( code ) => ( { code, errors: [ error ] } ) ),
		// $.removeProp util is disallowed too as the rule is shared
		// with $.prop, but $.removeProp doesn't exist
		...[
			'$("div").removeProp()'
		].map( ( code ) => ( { code, errors: [ errorRemove ] } ) )
	]
} );
