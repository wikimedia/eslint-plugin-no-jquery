'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	[ 'fadeIn', 'fadeOut', 'fadeTo', 'fadeToggle' ],
	( node ) => `Prefer CSS transitions to $.${node.callee.property.name}`
);
