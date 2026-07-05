'use strict';

const rule = require( '../../src/rules/no-jquery-ui' );
const RuleTester = require( '../../tools/rule-tester' );

const methods = [
	// Widgets, interactions and `mouse`, the abstract base widget they build on
	'accordion',
	'autocomplete',
	'button',
	'buttonset',
	'checkboxradio',
	'controlgroup',
	'datepicker',
	'dialog',
	'draggable',
	'droppable',
	'menu',
	'mouse',
	'progressbar',
	'resizable',
	'selectable',
	'selectmenu',
	'slider',
	'sortable',
	'spinner',
	'tabs',
	'tooltip',
	// Effects
	'cssClip',
	'effect',
	'switchClass',
	'transfer',
	// Utilities
	'disableSelection',
	'enableSelection',
	'labels',
	'removeUniqueId',
	'scrollParent',
	'uniqueId',
	'zIndex'
];

const valid = [];
const invalid = [];

methods.forEach( ( method ) => {
	const error = { messageId: 'default', data: { name: method } };
	const docgen = method === 'button' || method === 'slider' || method === 'draggable';
	valid.push(
		{ code: method + '()', docgen },
		{ code: 'div.' + method + '()', docgen },
		{ code: '$.' + method + '()', docgen }
	);
	invalid.push(
		{ code: '$div.' + method + '()', docgen, errors: [ error ] },
		{ code: '$( \'div\' ).' + method + '()', docgen, errors: [ error ] }
	);
} );

valid.push(
	// Methods jQuery UI overrides which also exist in core jQuery are not
	// flagged, to avoid false positives on plain jQuery code
	'$div.addClass( "foo" )',
	'$div.removeClass( "foo" )',
	'$div.toggleClass( "foo" )',
	'$div.show()',
	'$div.hide()',
	'$div.toggle()',
	'$div.position()',
	'$div.focus()'
);

const ruleTester = new RuleTester();
ruleTester.run( 'no-jquery-ui', rule, {
	valid,
	invalid
} );
