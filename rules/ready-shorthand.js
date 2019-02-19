'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'ready',
	'Prefer $ to $.ready'
);
