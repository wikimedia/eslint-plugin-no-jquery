'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'bind',
	'Prefer $.on/addEventListener to bind'
);
