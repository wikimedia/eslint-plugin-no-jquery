'use strict';

const rule = require( '../../src/rules/no-proxy' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-proxy', rule, {
	valid: [ 'proxy(fn, context)', '"test".proxy(fn, context)', '"test".proxy' ],
	invalid: [
		{
			code: '$.proxy(this.fn, context)',
			output: 'this.fn.bind(context)'
		},
		{
			code: '$.proxy(fn, context, arg1, arg2)',
			output: 'fn.bind(context, arg1, arg2)'
		},
		{
			code: 'x = $.proxy(cond ? f : g, context)',
			output: 'x = (cond ? f : g).bind(context)',
			docgen: false
		},
		{
			code: 'x = $.proxy(() => 42, context)',
			output: 'x = (() => 42).bind(context)',
			docgen: false
		},
		{
			code: '$.proxy(function () {}, context);',
			output: '(function () {}).bind(context);',
			docgen: false
		},
		{
			code: 'x = $.proxy(new Foo, context)',
			output: 'x = (new Foo).bind(context)',
			docgen: false
		},
		{
			code: 'x = $.proxy((a || b), context)',
			output: 'x = (a || b).bind(context)',
			docgen: false
		},
		{
			code: 'x = $.proxy(f(a, b), (c, d))',
			output: 'x = f(a, b).bind((c, d))',
			docgen: false
		},
		{
			code: 'x = $.proxy(fn, /* comment */ context)',
			output: 'x = fn.bind(/* comment */ context)',
			docgen: false
		},
		{
			code: '$.proxy(context, `fnName`)',
			output: null,
			docgen: false
		},
		{
			code: '$.proxy(...args)',
			output: null,
			docgen: false
		},
		{
			code: '$.proxy(fn, ...args)',
			output: null,
			docgen: false
		},
		{
			code: '$.proxy(context, "fnName")'
		},
		{
			code: '$.proxy(context, "fnName", arg1, arg2)'
		},
		{
			code: '$.proxy()',
			docgen: false
		}
	].map( ( obj ) => ( { ...obj, errors: [ error ] } ) )
} );
