'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createCollectionMethodRule(
	[ 'serialize', 'serializeArray' ],
	'Prefer `FormData` or `URLSearchParams`',
	{
		messages: { default: 'Prefer FormData or URLSearchParams to .{{name}}' }
	}
);
