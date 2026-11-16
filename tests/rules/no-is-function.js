'use strict';

const rule = require( '../../src/rules/no-is-function' );
const RuleTester = require( '../../tools/rule-tester' );

const error = { messageId: 'default' };

const ruleTester = new RuleTester();
ruleTester.run( 'no-is-function', rule, {
	valid: [ 'isFunction()', 'myClass.isFunction()', '$div.isFunction()' ],
	invalid: [
		{
			code: '$.isFunction(expression(arg))',
			output: 'typeof expression(arg) === "function"'
		},
		{
			code: 'if($.isFunction(fn)){g();}',
			output: 'if(typeof fn === "function"){g();}'
		},
		{
			code: 'x = !$.isFunction(fn)',
			output: 'x = !(typeof fn === "function")',
			docgen: false
		},
		{
			code: 'x = $.isFunction(fn) + "!"',
			output: 'x = (typeof fn === "function") + "!"',
			docgen: false
		},
		{
			code: 'x = $.isFunction(fn) === true',
			output: 'x = (typeof fn === "function") === true',
			docgen: false
		},
		{
			code: '$.isFunction(fn).toString()',
			output: '(typeof fn === "function").toString()',
			docgen: false
		},
		{
			code: 'x = $.isFunction(a || b)',
			output: 'x = typeof (a || b) === "function"',
			docgen: false
		},
		{
			code: 'x = $.isFunction(() => 1)',
			output: 'x = typeof (() => 1) === "function"',
			docgen: false
		},
		{
			code: 'x = $.isFunction((fn))',
			output: 'x = typeof fn === "function"',
			docgen: false
		},
		{
			code: 'x = $.isFunction(this)',
			output: 'x = typeof this === "function"',
			docgen: false
		},
		{
			code: 'x = $.isFunction(a.b) ? f($.isFunction(c), [ $.isFunction(d) ]) : { e: $.isFunction(e) }',
			output: 'x = typeof a.b === "function" ? f(typeof c === "function", [ typeof d === "function" ]) : { e: typeof e === "function" }',
			errors: 4,
			docgen: false
		},
		{
			code: 'var x = $.isFunction(a) && $.isFunction(b), y = () => $.isFunction(c), z = `${$.isFunction(d)}`;',
			output: 'var x = typeof a === "function" && typeof b === "function", y = () => typeof c === "function", z = `${typeof d === "function"}`;',
			errors: 4,
			docgen: false
		},
		{
			code: 'function f(a = $.isFunction(b)) { while ($.isFunction(c)) { return $.isFunction(d); } }',
			output: 'function f(a = typeof b === "function") { while (typeof c === "function") { return typeof d === "function"; } }',
			errors: 3,
			docgen: false
		},
		{
			code: 'x[$.isFunction(a)] = 1',
			output: 'x[(typeof a === "function")] = 1',
			docgen: false
		},
		{
			code: '$.isFunction()',
			output: null,
			docgen: false
		},
		{
			code: '$.isFunction(a, b)',
			output: null,
			docgen: false
		},
		{
			code: '$.isFunction(...a)',
			output: null,
			docgen: false
		}
	].map( ( obj ) => ( {
		...obj,
		errors: Array( obj.errors || 1 ).fill( error )
	} ) )
} );
