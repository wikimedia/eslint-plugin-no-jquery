'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'live',
	'Prefer $.on/addEventListener to live'
);
