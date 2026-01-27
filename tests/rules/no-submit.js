'use strict';

const rule = require( '../../src/rules/no-submit' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Prefer EventTarget#dispatchEvent + HTMLFormElement#submit to .submit. This rule is deprecated, use no-event-shorthand.';

const ruleTester = new RuleTester();
ruleTester.run( 'no-submit', rule, {
	valid: [ 'submit()', '[].submit()', 'form.submit()', 'form.submit' ],
	invalid: [
		'$("form").submit()',
		'$form.submit()',
		'$("form").first().submit()',
		'$("form").append($("input").submit())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
