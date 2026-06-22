'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createCollectionMethodRule(
	[ 'fadeIn', 'fadeOut', 'fadeTo', 'fadeToggle' ],
	'Prefer CSS transitions',
	{
		messages: { default: 'Prefer CSS transitions to .{{name}}' }
	}
);
