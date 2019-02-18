'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'parent',
	'Prefer parentElement to $.parent'
);
