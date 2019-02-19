'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'andSelf',
	'Prefer $.addBack to $.andSelf'
);
