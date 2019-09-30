'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionOrUtilMethodRule(
	[ 'prop', 'removeProp' ],
	( node ) => 'Prefer direct property access to $.' + node.callee.property.name
);
