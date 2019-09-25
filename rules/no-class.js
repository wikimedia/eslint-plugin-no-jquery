'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	[ 'addClass', 'hasClass', 'removeClass', 'toggleClass' ],
	( node ) => `Prefer Element#classList to ${node.callee.property.name}`
);
