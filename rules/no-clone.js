'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'clone',
	'Prefer Node#cloneNode to $.clone'
);
