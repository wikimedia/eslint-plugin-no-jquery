'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'delegate',
	'Prefer `$.on`/`EventTarget#addEventListener` to `$.delegate`'
);
