'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'unbind',
	'Prefer $.off/removeEventListener to unbind'
);
