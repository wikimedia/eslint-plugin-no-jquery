'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'css',
	'Prefer getComputedStyle to css'
);
