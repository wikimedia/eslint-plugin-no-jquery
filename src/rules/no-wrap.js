'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createCollectionMethodRule(
	[ 'wrap', 'wrapAll', 'wrapInner', 'unwrap' ],
	''
);
