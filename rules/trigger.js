'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'trigger',
	'Prefer dispatchEvent to $.trigger'
);
