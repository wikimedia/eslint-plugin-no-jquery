'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createUniversalMethodRule(
	[ 'done', 'fail' ],
	'Prefer `.then`',
	( method ) => `[\`.${ method }\`](https://api.jquery.com/deferred.${ method }/)`,
	{
		messages: { default: 'Prefer .then to .{{name}}' }
	}
);
