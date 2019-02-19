'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'die',
	'Prefer $.off/removeEventListener to die'
);
