'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionOrUtilMethodRule(
	'attr',
	( node ) => 'Prefer Element#' + ( node.arguments.length === 2 ? 'set' : 'get' ) + 'Attribute to attr'
);
