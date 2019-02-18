'use strict';

const utils = require( './utils.js' );

module.exports = utils.createUtilMethodRule(
	'parseJSON',
	'Prefer JSON.parse to $.parseJSON'
);
