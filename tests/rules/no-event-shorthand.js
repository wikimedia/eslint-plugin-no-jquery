'use strict';

const rule = require( '../../src/rules/no-event-shorthand' );
const RuleTester = require( '../../tools/rule-tester' );

const ruleTester = new RuleTester();
const ajaxEvents = [
	'ajaxStart',
	'ajaxStop',
	'ajaxComplete',
	'ajaxError',
	'ajaxSuccess',
	'ajaxSend'
];
const forbidden = [
	// Browser
	'error',
	'resize',
	'scroll',
	'unload',
	// Form
	'blur',
	'change',
	'focus',
	'focusin',
	'focusout',
	'select',
	'submit',
	// Keyboard
	'keydown',
	'keypress',
	'keyup',
	// Mouse
	'click',
	'contextmenu',
	'dblclick',
	'hover',
	'mousedown',
	'mouseenter',
	'mouseleave',
	'mousemove',
	'mouseout',
	'mouseover',
	'mouseup'
].concat( ajaxEvents );
let valid = [];
let invalid = [];

forbidden.forEach( ( method ) => {
	const error = 'Prefer .on or .trigger to .' + method;
	valid = valid.concat(
		{
			code: method + '()',
			docgen: false
		},
		{
			code: '$.' + method + '()',
			docgen: false
		},
		{
			code: '[].' + method + '()',
			docgen: false
		},
		{
			code: '$div.on("' + method + '", fn)'
		},
		{
			code: '$div.trigger("' + method + '")'
		},
		{
			code: '$method(x).' + method + '()',
			docgen: false
		},
		{
			code: 'div.' + method,
			docgen: false
		}
	);
	invalid = invalid.concat(
		{
			code: '$("div").' + method + '(handler)',
			errors: [ error ],
			output: '$("div").on("' + method + '", handler)'
		},
		{
			code: '$div.' + method + '()',
			errors: [ error ],
			output: '$div.trigger("' + method + '")'
		},
		{
			code: 'this.prop.$div.' + method + '(handler)',
			errors: [ error ],
			output: 'this.prop.$div.on("' + method + '", handler)',
			docgen: false
		},
		{
			code: '$("div").first().' + method + '()',
			errors: [ error ],
			output: '$("div").first().trigger("' + method + '")',
			docgen: false
		},
		{
			code: '$("div").append($("input").' + method + '())',
			errors: [ error ],
			output: '$("div").append($("input").trigger("' + method + '"))',
			docgen: false
		}
	);
} );
ruleTester.run( 'no-event-shorthand', rule, {
	valid: valid.concat( [
		// Don't conflict with Ajax load
		'$div.load( "url", handler )'
	] ).concat(
		ajaxEvents.map( ( eventName ) => ( {
			code: '$div.' + eventName + '()',
			options: [ { allowAjaxEvents: true } ]
		} ) ),
		ajaxEvents.map( ( eventName ) => ( {
			code: '$div.on("' + eventName + '", fn)',
			options: [ { allowAjaxEvents: true } ]
		} ) )
	),
	invalid
} );
