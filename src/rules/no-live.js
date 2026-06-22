'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createCollectionMethodRule(
	[ 'live', 'die' ],
	'Prefer `.on`/`.off` or `EventTarget#addEventListener`/`removeEventListener`',
	{
		messages: {
			live: 'Prefer .on/EventTarget#addEventListener to .live',
			die: 'Prefer .off/EventTarget#removeEventListener to .die'
		},
		report: ( node, name ) => ( { messageId: name } )
	}
);
