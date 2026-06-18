'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createCollectionMethodRule(
	[ 'slideDown', 'slideToggle', 'slideUp' ],
	'Prefer CSS transitions',
	{
		messages: { default: 'Prefer CSS transitions to .{{name}}' }
	}
);
