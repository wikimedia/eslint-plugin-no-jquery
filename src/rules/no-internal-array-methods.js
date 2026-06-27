'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createCollectionMethodRule(
	[ 'push', 'sort', 'splice' ],
	'Prefer `[].push.call`/`[].sort.call`/`[].splice.call` to `.push`/`.sort`/`.splice`',
	{
		messages: {
			default: 'Prefer [].{{name}}.call to {{name}}'
		}
	}
);
