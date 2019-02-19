'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'delegate',
	'Prefer $.on/addEventListener to delegate'
);
