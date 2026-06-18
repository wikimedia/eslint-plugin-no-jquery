'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createUtilMethodRule(
	[ 'ajax', 'get', 'getJSON', 'getScript', 'post' ],
	'Prefer `Window.fetch`',
	{
		messages: { default: 'Prefer Window.fetch to $.{{name}}' }
	}
);
