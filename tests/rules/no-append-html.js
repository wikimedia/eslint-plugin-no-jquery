'use strict';

const rule = require( '../../src/rules/no-append-html' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

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
		'$div.append(document.createTextNode(userInput))',
		'$div.append(window.document.createTextNode(userInput))',
		'$div.append($el, document.createTextNode(userInput))',
		'$div.append(test ? $el : document.createTextNode(userInput))',
		'$div.prepend(document.createTextNode(userInput))',
		'$div.before(document.createTextNode(userInput))',
		'$div.after(document.createTextNode(userInput))',
		'$div.replaceWith(document.createTextNode(userInput))',
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
		'$div.append(getSomething())',
		'$div.append(foo.createTextNode(userInput))',
		'$div.append(document.createElement(userInput))'
	].map( ( code ) => ( { code, errors: [ error ] } ) )
} );
