'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'size',
	'Prefer length to $.size'
);
