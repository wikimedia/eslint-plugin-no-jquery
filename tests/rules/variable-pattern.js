'use strict';

const rule = require( '../../src/rules/variable-pattern' );
const RuleTester = require( '../../tools/rule-tester' );

const error = 'jQuery collection names must match the variablePattern';

const extendedPattern = '^\\$.|^element$';

const ruleTester = new RuleTester();
ruleTester.run( 'variable-pattern', rule, {
	valid: [
		// Basic cases
		'var $div = $("<div>")',
		{
			code: 'let $letDiv = $("<div>")',
			parserOptions: { ecmaVersion: 2015 },
			docgen: false
		},
		{
			code: 'const $constDiv = $("<div>")',
			parserOptions: { ecmaVersion: 2015 },
			docgen: false
		},
		{
			code: 'var div',
			docgen: false
		},
		'$div = $("<div>")',
		'foo.$div = $("<div>")',
		'foo.bar.$div = $("<div>")',
		'foo[unknownName] = $("<div>")',
		'foo[$unknownName] = $("<div>")',
		'$foo[unknownName] = $("<div>")',
		'$foo[$unknownName] = $("<div>")',
		'$foo.text = $("<div>").text()',
		'var $foo = $div',
		// It is not possible for the linter to detect that this is a jQuery collection,
		// but it is also the only way to store a plain array of jQuery collections.
		'foo[3] = $("<div>")',

		// Utils
		'deferred = $.Deferred()',
		'var foo = $.extend( {}, {} )',
		'foo.bar = $.extend( {}, {} )',

		// nonCollectionReturningAccessors
		'number = $div.height()',
		'string = $div.html()',
		'obj = $div.offset()',
		'mixed = $div.val()',
		{
			code: 'number = $div.innerHeight()',
			docgen: false
		},
		{
			code: 'number = $div.innerWidth()',
			docgen: false
		},
		{
			code: 'number = $div.scrollLeft()',
			docgen: false
		},
		{
			code: 'number = $div.scrollTop()',
			docgen: false
		},
		{
			code: 'string = $div.text()',
			docgen: false
		},
		{
			code: 'number = $div.width()',
			docgen: false
		},

		// nonCollectionReturningMethods
		'list = $div.get()',
		'node = $div.get(1)',
		'bool = $div.hasClass("foo")',
		'obj = $div.position()',
		'promise = $div.promise()',
		'promise = $div.promise("fx")',
		'promise = $div.promise("fx", obj)',
		'string = $div.serialize()',
		'list = $div.serializeArray()',
		'list = $div.toArray()',
		'obj = $div.triggerHandler("click")',
		'obj = $div.triggerHandler("click", params)',
		'obj = $div.triggerHandler(e, params)',
		'number = $div.index()',
		'number = $div.index(".foo")',
		'number = $div.index(element)',
		'bool = $div.is(".foo")',
		'bool = $div.is($div)',

		// nonCollectionReturningValueAccessors
		'string = $div.attr("name")',
		'string = $div.attr(possibleName)',
		{
			code: 'string = $div.css("name")',
			docgen: false
		},
		{
			code: 'string = $div.css(possibleName)',
			docgen: false
		},
		{
			code: 'string = $div.data("name")',
			docgen: false
		},
		{
			code: 'string = $div.data(possibleName)',
			docgen: false
		},
		'obj = $div.data()',
		'string = $div.prop("name")',
		'string = $div.prop(possibleName)',

		// outerWidth/outerHeight
		'number = $div.outerWidth()',
		'number = $div.outerWidth(true)',
		'number = $div.outerWidth(possibleBool)',
		{
			code: 'number = $div.outerHeight()',
			docgen: false
		},
		{
			code: 'number = $div.outerHeight(true)',
			docgen: false
		},
		{
			code: 'number = $div.outerHeight(possibleBool)',
			docgen: false
		},

		// queue
		'list = $div.queue()',
		'list = $div.queue("fx")',

		// Custom pattern
		{
			code: 'this.element = $("<div>")',
			settings: { 'no-jquery': { variablePattern: extendedPattern } }
		},
		// Plugins
		'val = $div.unknownPlugin()',
		'val = $div.unknownPlugin(arg1)',
		'val = $div.unknownPlugin(arg1, arg2)',

		{
			code: 'obj = $("<div>").datePicker()',
			settings: { 'no-jquery': { collectionReturningPlugins: { datePicker: 'accessor' } } }
		},
		{
			code: 'obj = $("<div>").datePicker("name")',
			settings: { 'no-jquery': { collectionReturningPlugins: { datePicker: 'valueAccessor' } } }
		},
		{
			code: 'obj = $("<div>").datePicker("name", options)',
			settings: { 'no-jquery': { collectionReturningPlugins: { datePicker: 'never' } } }
		}
	],
	invalid: [
		{
			code: 'var div = $("<div>")',
			errors: [ error ]
		},
		{
			code: 'let letDiv = $("<div>")',
			parserOptions: { ecmaVersion: 2015 },
			docgen: false,
			errors: [ error ]
		},
		{
			code: 'const constDiv = $("<div>")',
			parserOptions: { ecmaVersion: 2015 },
			docgen: false,
			errors: [ error ]
		},
		{
			code: 'var div = $div',
			errors: [ error ]
		},
		// Plugins
		{
			code: 'div = $("<div>").datePicker()',
			settings: { 'no-jquery': { collectionReturningPlugins: { datePicker: 'always' } } },
			errors: [ error ]
		},
		{
			code: 'div = $("<div>").datePicker(options)',
			settings: { 'no-jquery': { collectionReturningPlugins: { datePicker: 'always' } } },
			errors: [ error ]
		},
		{
			code: 'div = $("<div>").datePicker(options)',
			settings: { 'no-jquery': { collectionReturningPlugins: { datePicker: 'accessor' } } },
			errors: [ error ]
		},
		{
			code: 'div = $("<div>").datePicker("name", newPicker)',
			settings: { 'no-jquery': { collectionReturningPlugins: { datePicker: 'valueAccessor' } } },
			errors: [ error ]
		}
	].concat(
		[
			'foo.div = $("<div>")',
			'$foo.div = $("<div>")',
			'$foo.$div.bar = $("<div>")',

			// nonCollectionReturningAccessors
			'div = $div.height(value)',
			'div = $div.html(value)',
			'div = $div.offset(value)',
			'div = $div.val(value)',
			{
				code: 'div = $div.innerHeight(value)',
				docgen: false
			},
			{
				code: 'div = $div.innerWidth(value)',
				docgen: false
			},
			{
				code: 'div = $div.scrollLeft(value)',
				docgen: false
			},
			{
				code: 'div = $div.scrollTop(value)',
				docgen: false
			},
			{
				code: 'div = $div.text(value)',
				docgen: false
			},
			{
				code: 'div = $div.width(value)',
				docgen: false
			},

			// nonCollectionReturningValueAccessors
			'div = $div.attr("name", "value")',
			'div = $div.attr({name: "value"})',
			'div = $div.attr({name: fn})',
			{
				code: 'div = $div.css("name", "value")',
				docgen: false
			},
			{
				code: 'div = $div.css({name: "value"})',
				docgen: false
			},
			{
				code: 'div = $div.css({name: fn})',
				docgen: false
			},
			{
				code: 'div = $div.data("name", "value")',
				docgen: false
			},
			{
				code: 'div = $div.data({name: "value"})',
				docgen: false
			},
			{
				code: 'div = $div.data({name: fn})',
				docgen: false
			},
			{
				code: 'div = $div.prop("name", "value")',
				docgen: false
			},
			{
				code: 'div = $div.prop({name: "value"})',
				docgen: false
			},
			{
				code: 'div = $div.prop({name: fn})',
				docgen: false
			},

			// outerWidth/outerHeight
			'div = $div.outerWidth(30)',
			'number = $div.outerWidth(30, true)',
			'number = $div.outerWidth(mustBeNumber, true)',
			'div = $div.outerWidth(function(){ return 30; })',
			'div = $div.outerHeight(30)',
			'number = $div.outerHeight(30, true)',
			'number = $div.outerHeight(mustBeNumber, true)',
			'div = $div.outerHeight(function(){ return 30; })',

			// queue
			'list = $div.queue(newQueueOrCallBack)',
			'list = $div.queue([])',
			'div = $div.queue("fx", newQueueOrCallBack)',

			// other known methods (always return collections)
			'div = $div.stop()',
			'div = $div.stop(true)',
			'div = $div.stop(true, true)'
		].map(
			( test ) => Object.assign( {
				errors: [ error ]
			}, typeof test === 'string' ? { code: test } : test )
		)
	)
} );
