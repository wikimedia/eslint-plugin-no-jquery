'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionOrUtilMethodRule(
	[ 'data', 'removeData' ],
	( node ) => 'Prefer WeakMap to ' + node.callee.property.name
);
