'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createCollectionMethodRule(
	[ 'delegate', 'undelegate' ],
	'Prefer `.on`/`.off` or `EventTarget#addEventListener`/`removeEventListener`',
	{
		messages: {
			delegate: 'Prefer .on/EventTarget#addEventListener to .delegate',
			undelegate: 'Prefer .off/EventTarget#removeEventListener to .undelegate'
		},
		report: ( node, name ) => ( { messageId: name } )
	}
);
