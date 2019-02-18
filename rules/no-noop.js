'use strict';

const utils = require( './utils.js' );

module.exports = utils.createUtilPropertyRule(
	'noop',
	'Prefer function() {} to $.noop'
);
