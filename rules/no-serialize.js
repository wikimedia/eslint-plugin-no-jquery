'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	[ 'serialize', 'serializeArray' ],
	( node ) => `Prefer FormData or URLSearchParams to $.${node.callee.property.name}`
);
