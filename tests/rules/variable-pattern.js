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
		'$div = $("<div>")',
		'foo.$div = $("<div>")',
		'foo.bar.$div = $("<div>")',
		'foo[unknownName] = $("<div>")',
		'foo[$unknownName] = $("<div>")',
		'$foo[unknownName] = $("<div>")',
		'$foo[$unknownName] = $("<div>")',
		'$foo.text = $("<div>").text()',
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
		'number = $div.innerHeight()',
		'number = $div.innerWidth()',
		'obj = $div.offset()',
		'number = $div.scrollLeft()',
		'number = $div.scrollTop()',
		'string = $div.text()',
		'mixed = $div.val()',
		'number = $div.width()',

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
		'string = $div.css("name")',
		'string = $div.css(possibleName)',
		'string = $div.data("name")',
		'string = $div.data(possibleName)',
		'obj = $div.data()',
		'string = $div.prop("name")',
		'string = $div.prop(possibleName)',

		// outerWidth/outerHeight
		'number = $div.outerWidth()',
		'number = $div.outerWidth(true)',
		'number = $div.outerWidth(possibleBool)',
		'number = $div.outerHeight()',
		'number = $div.outerHeight(true)',
		'number = $div.outerHeight(possibleBool)',

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
			errors: [ { message: error, type: 'VariableDeclarator' } ]
		},
		// Plugins
		{
			code: 'div = $("<div>").datePicker()',
			settings: { 'no-jquery': { collectionReturningPlugins: { datePicker: 'always' } } },
			errors: [ { message: error, type: 'AssignmentExpression' } ]
		},
		{
			code: 'div = $("<div>").datePicker(options)',
			settings: { 'no-jquery': { collectionReturningPlugins: { datePicker: 'always' } } },
			errors: [ { message: error, type: 'AssignmentExpression' } ]
		},
		{
			code: 'div = $("<div>").datePicker(options)',
			settings: { 'no-jquery': { collectionReturningPlugins: { datePicker: 'accessor' } } },
			errors: [ { message: error, type: 'AssignmentExpression' } ]
		},
		{
			code: 'div = $("<div>").datePicker("name", newPicker)',
			settings: { 'no-jquery': { collectionReturningPlugins: { datePicker: 'valueAccessor' } } },
			errors: [ { message: error, type: 'AssignmentExpression' } ]
		}
	].concat(
		[
			'foo.div = $("<div>")',
			'$foo.div = $("<div>")',
			'$foo.$div.bar = $("<div>")',

			// nonCollectionReturningAccessors
			'div = $div.height(value)',
			'div = $div.html(value)',
			'div = $div.innerHeight(value)',
			'div = $div.innerWidth(value)',
			'div = $div.offset(value)',
			'div = $div.scrollLeft(value)',
			'div = $div.scrollTop(value)',
			'div = $div.text(value)',
			'div = $div.val(value)',
			'div = $div.width(value)',

			// nonCollectionReturningValueAccessors
			'div = $div.attr("name", "value")',
			'div = $div.attr({name: "value"})',
			'div = $div.attr({name: fn})',
			'div = $div.css("name", "value")',
			'div = $div.css({name: "value"})',
			'div = $div.css({name: fn})',
			'div = $div.data("name", "value")',
			'div = $div.data({name: "value"})',
			'div = $div.data({name: fn})',
			'div = $div.prop("name", "value")',
			'div = $div.prop({name: "value"})',
			'div = $div.prop({name: fn})',

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
			( code ) => ( {
				code: code,
				errors: [ { message: error, type: 'AssignmentExpression' } ]
			} )
		)
	)
} );
