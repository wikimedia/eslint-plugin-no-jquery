'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createCollectionOrUtilMethodRule(
	[ 'prop', 'removeProp' ],
	'Prefer direct property access',
	{
		messages: { default: 'Prefer direct property access to .{{name}}/$.{{name}}' }
	}
);
