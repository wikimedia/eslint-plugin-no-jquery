'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionOrUtilMethodRule(
	[ 'attr', 'removeAttr' ],
	( node ) => 'Prefer Element#' +
		(
			node.callee.property.name === 'removeAttr' ? 'remove' :
				node.arguments.length === 2 ? 'set' : 'get'
		) +
		'Attribute to ' + node.callee.property.name
);
