'use strict';

const rule = require( '../../src/rules/no-visibility' );
const RuleTester = require( '../../tools/rule-tester' );

const errorShow = '.show is not allowed';
const errorHide = '.hide is not allowed';
const errorToggle = '.toggle is not allowed';

const ruleTester = new RuleTester();
ruleTester.run( 'no-visibility', rule, {
	valid: [
		'show()',
		'[].show()',
		'div.show()',
		'div.show',

		'hide()',
		'[].hide()',
		'div.hide()',
		'div.hide',

		'toggle()',
		'[].toggle()',
		'div.toggle()',
		'div.toggle'
	],
	invalid: [
		{
			code: '$("div").show()',
			errors: [ errorShow ]
		},
		{
			code: '$div.show()',
			errors: [ errorShow ]
		},
		{
			code: '$("div").first().show()',
			errors: [ errorShow ]
		},
		{
			code: '$("div").append($("input").show())',
			errors: [ errorShow ]
		},
		{
			code: '$("div").hide()',
			errors: [ errorHide ]
		},
		{
			code: '$div.hide()',
			errors: [ errorHide ]
		},
		{
			code: '$("div").first().hide()',
			errors: [ errorHide ]
		},
		{
			code: '$("div").append($("input").hide())',
			errors: [ errorHide ]
		},
		{
			code: '$("div").toggle()',
			errors: [ errorToggle ]
		},
		{
			code: '$div.toggle()',
			errors: [ errorToggle ]
		},
		{
			code: '$("div").first().toggle()',
			errors: [ errorToggle ]
		},
		{
			code: '$("div").append($("input").toggle())',
			errors: [ errorToggle ]
		}
	]
} );
