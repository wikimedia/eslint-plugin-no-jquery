'use strict';

const utils = require( './utils.js' );

module.exports = utils.createUtilMethodRule(
	'extend',
	'Prefer Object#assign or the spread operator to $.extend'
);
