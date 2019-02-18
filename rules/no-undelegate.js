'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'undelegate',
	'Prefer $.off/removeEventListener to undelegate'
);
