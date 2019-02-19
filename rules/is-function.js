'use strict';

const utils = require( './utils.js' );

module.exports = utils.createUtilMethodRule(
	'isFunction',
	'Prefer typeof to $.isFunction'
);
