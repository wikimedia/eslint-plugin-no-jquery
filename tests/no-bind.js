'use strict';

const rule = require( '../rules/no-bind' );
const RuleTesterAndDocs = require( '../rule-tester-and-docs' );

const bindError = 'Prefer .on/EventTarget#addEventListener to .bind';
const unbindError = 'Prefer .off/EventTarget#removeEventListener to .unbind';

const ruleTester = new RuleTesterAndDocs();
ruleTester.run( 'no-bind', rule, {
	valid: [
		'bind()',
		'[].bind()',
		'div.bind()',
		'div.bind',
		'$div.remove.bind($div)',

		'unbind()',
		'[].unbind()',
		'div.unbind()',
		'div.unbind',
		'$div.remove.unbind($div)'
	],
	invalid: [
		[ '$("div").bind()', bindError ],
		[ '$div.bind()', bindError ],
		[ '$("div").first().bind()', bindError ],
		[ '$("div").append($("input").bind())', bindError ],

		[ '$("div").unbind()', unbindError ],
		[ '$div.unbind()', unbindError ],
		[ '$("div").first().unbind()', unbindError ],
		[ '$("div").append($("input").unbind())', unbindError ]
	].map( ( codeError ) => ( {
		code: codeError[ 0 ],
		errors: [ { message: codeError[ 1 ], type: 'CallExpression' } ]
	} ) )
} );
