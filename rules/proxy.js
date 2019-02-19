'use strict';

const utils = require( './utils.js' );

module.exports = utils.createUtilMethodRule(
	'proxy',
	'Prefer Function#bind to $.proxy'
);
