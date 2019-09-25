'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionOrUtilMethodRule(
	'prop',
	'Prefer direct property access to $.prop'
);
