'use strict';

const utils = require( './utils.js' );

module.exports = utils.createUtilMethodRule(
	'parseXML',
	'Prefer `DOMParser#parseFromString` to `$.parseXML`'
);
