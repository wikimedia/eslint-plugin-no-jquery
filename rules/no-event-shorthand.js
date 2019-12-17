'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	[
		// Browser
		'error',
		// Can't disallow 'load' as it conflicts with Ajax load.
		// Use no-load-shorthand rule instead.
		// TODO: Share the logic of no-load-shorthand with this rule.
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
		'mouseup',
		// AJAX
		'ajaxStart',
		'ajaxStop',
		'ajaxComplete',
		'ajaxError',
		'ajaxSuccess',
		'ajaxSend'
	],
	( node ) => node === true ?
		'Prefer `$.on` or `$.trigger`' :
		`Prefer $.on or $.trigger to $.${node.callee.property.name}`,
	{
		fixable: 'code',
		fix: utils.eventShorthandFixer
	}
);
