'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createCollectionOrUtilMethodRule(
	[ 'data', 'removeData', 'hasData' ],
	'Prefer `WeakMap`',
	{
		messages: { default: 'Prefer WeakMap to .{{name}}/$.{{name}}' }
	}
);
