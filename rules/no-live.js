'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'live',
	'Prefer `$.on`/`EventTarget#addEventListener` to `$.live`'
);
