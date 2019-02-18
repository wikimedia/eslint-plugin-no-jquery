'use strict';

const utils = require( './utils.js' );

module.exports = utils.createUtilMethodRule(
	[ 'ajax', 'get', 'getJSON', 'getScript', 'post' ],
	( node ) => `Prefer fetch to $.${node.callee.property.name}`
);
