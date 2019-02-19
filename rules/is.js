'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'is',
	'Prefer matches to $.is'
);
