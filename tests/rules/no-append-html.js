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
		'$div.add($el)',
		'$div.appendTo($el)',
		'$div.prependTo($el)',
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
		'$div.add(".foo")',
		'$div.appendTo(".foo")',
		'$div.prependTo(".foo")',
		'$div.insertBefore(".foo")',
		'$div.insertAfter(".foo")',
		{
			code: 'div.append("<xss>")',
			docgen: false
		}
	],
	invalid: [
		'$div.append("<xss>")',
		'$div.append("unescaped html")',
		'$div.prepend("<xss>")',
		'$div.before("<xss>")',
		'$div.after("<xss>")',
		'$div.replaceWith("<xss>")',
		'$els.add("<xss>")',
		'$els.appendTo("<xss>")',
		'$els.prependTo("<xss>")',
		'$div.append(code + "<xss>")',
		'$div.append(test ? $el : "<xss>")',
		'$div.append($el, "<xss>")',
		'$div.append(this.$el.someProp)',
		'$div.append(userInput)',
		'$div.append(getSomething())'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
