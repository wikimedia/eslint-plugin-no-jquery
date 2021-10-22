'use strict';

const rule = require( '../../src/rules/no-append-html' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'Avoid injection of possibly unescaped HTML. Create DOM elements instead, or use .text.';

const ruleTester = new RuleTester();
ruleTester.run( 'no-append-html', rule, {
	valid: [
		'$div.append($el)',
		'$div.prepend($el)',
		'$div.before($el)',
		'$div.after($el)',
		'$div.replaceWith($el)',
		'$div.append(this.$el)',
		'$div.append(this.foo.$el)',
		'$div.append($el1, $el2)',
		'$div.append($el1, " ", $el2)',
		'$div.append($el1, " \\n\\t ", $el2)',
		'$div.append($el.parent())',
		'$div.append(test ? $el1 : $el2)',
		'$div.append(test ? $el1 : null)',
		'$div.append(test ? $el1 : undefined)',
		'$div.append(test ? $el1 : "")',
		'$el=getSomething();\n$div.append($el);',
		{
			code: 'div.append("<xss>")',
			docgen: false
		}
	],
	invalid: [
		{
			code: '$div.append("<xss>")',
			errors: [ error ]
		},
		{
			code: '$div.prepend("<xss>")',
			errors: [ error ]
		},
		{
			code: '$div.before("<xss>")',
			errors: [ error ]
		},
		{
			code: '$div.after("<xss>")',
			errors: [ error ]
		},
		{
			code: '$div.replaceWith("<xss>")',
			errors: [ error ]
		},
		{
			code: '$div.append(code + "<xss>")',
			errors: [ error ]
		},
		{
			code: '$div.append(test ? $el : "<xss>")',
			errors: [ error ]
		},
		{
			code: '$div.append($el, "<xss>")',
			errors: [ error ]
		},
		{
			code: '$div.append(this.$el.someProp)',
			errors: [ error ]
		},
		{
			code: '$div.append(userInput)',
			errors: [ error ]
		},
		{
			code: '$div.append(getSomething())',
			errors: [ error ]
		}
	]
} );
