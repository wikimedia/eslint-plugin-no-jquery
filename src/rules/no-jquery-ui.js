'use strict';

const utils = require( '../utils.js' );

// Methods that jQuery UI adds to the jQuery prototype ($.fn). This is the union
// of $.fn additions across every minor release from 1.8 to 1.14, extracted from
// the bundled sources at https://code.jquery.com/ui/ (the widgets registered via
// `$.widget( "ui.NAME" )` plus the methods added in the effects, selection,
// unique-id, scroll-parent, position, datepicker and labels modules). The minor
// versions a method is present in are noted where it isn't all of them. See the
// API reference at https://api.jqueryui.com/.
const methods = [
	// Widgets, interactions and `mouse`, the abstract base widget they build on
	'accordion',
	'autocomplete',
	'button',
	'buttonset',
	'checkboxradio', // 1.12+
	'controlgroup', // 1.12+
	'datepicker',
	'dialog',
	'draggable',
	'droppable',
	'menu',
	'mouse',
	'progressbar',
	'resizable',
	'selectable',
	'selectmenu', // 1.11+
	'slider',
	'sortable',
	'spinner', // 1.9+
	'tabs',
	'tooltip', // 1.9+
	// Effects
	'cssClip', // 1.12+
	'effect',
	'switchClass',
	'transfer', // 1.12+
	// Utilities
	'disableSelection',
	'enableSelection',
	'labels', // 1.12+
	'removeUniqueId', // 1.9+
	'scrollParent',
	'uniqueId', // 1.9+
	'zIndex' // 1.8 - 1.11 (removed in 1.12)
	// Intentionally excluded:
	// - Methods jQuery UI overrides that also exist in core jQuery:
	//   addClass, removeClass, toggleClass, show, hide, toggle,
	//   position and focus (`.focus( delay )` 1.8 - 1.11).
	// - Methods jQuery UI only patches onto older jQuery for back-compat, which
	//   are likewise core methods: addBack, even, odd, offset, remove, removeData.
	// - Internal or undocumented helpers: the saved-original `_`-prefixed methods
	//   (e.g. `_show`), `propAttr` (1.8), `cssUnit` and `form` (1.12).
];

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallows the use of jQuery UI [widgets, interactions, effects and utilities](https://api.jqueryui.com/).'
		},
		schema: [],
		messages: {
			default: 'jQuery UI .{{name}} is not allowed'
		}
	},

	create: ( context ) => ( {
		'CallExpression:exit': ( node ) => {
			if ( node.callee.type !== 'MemberExpression' ) {
				return;
			}
			const name = node.callee.property.name;
			if (
				!methods.includes( name ) ||
				// Skip static calls on the constructor, e.g. $.button()
				utils.isjQueryConstructor( context, node.callee.object.name )
			) {
				return;
			}

			if ( utils.isjQuery( context, node.callee ) ) {
				context.report( {
					node,
					messageId: 'default',
					data: { name }
				} );
			}
		}
	} )
};
