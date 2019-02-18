'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'html',
	'Prefer innerHTML to $.html'
);
