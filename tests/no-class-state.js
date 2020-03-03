'use strict';

const rule = require( '../rules/no-class-state' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const error = 'Where possible, maintain application state in JS to avoid slower DOM queries';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-class-state', rule, {
	valid: [
		'hasClass()',
		'[].hasClass()',
		'div.hasClass()',
		'div.hasClass',

		'toggleClass()',
		'[].toggleClass()',
		'div.toggleClass()',
		'div.toggleClass',

		// These are equivalent to addClass/removeClass and so
		// don't query the DOM for state information.
		'$div.toggleClass("myClass", true)',
		'$div.toggleClass("myClass", false)'
	],
	invalid: [
		{
			code: '$("div").hasClass()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.hasClass()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().hasClass()',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").hasClass())',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").toggleClass("myClass")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$div.toggleClass("myClass")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").first().toggleClass("myClass")',
			errors: [ { message: error, type: 'CallExpression' } ]
		},
		{
			code: '$("div").append($("input").toggleClass("myClass"))',
			errors: [ { message: error, type: 'CallExpression' } ]
		}
	]
} );
