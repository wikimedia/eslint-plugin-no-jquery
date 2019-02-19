'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	[
		// Browser
		'error',
		'resize',
		'scroll',
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
	],
	( node ) => `Prefer $.on or $.trigger to $.${node.callee.property.name}`
);
