'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createCollectionMethodRule(
	[ 'bind', 'unbind' ],
	'Prefer `.on`/`.off` or `EventTarget#addEventListener`/`removeEventListener`',
	{
		messages: {
			bind: 'Prefer .on/EventTarget#addEventListener to .bind',
			unbind: 'Prefer .off/EventTarget#removeEventListener to .unbind'
		},
		report: ( node, name ) => ( { messageId: name } )
	}
);
