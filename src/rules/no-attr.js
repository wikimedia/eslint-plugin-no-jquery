'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createCollectionOrUtilMethodRule(
	[ 'attr', 'removeAttr' ],
	'Prefer `Element#getAttribute`/`setAttribute`/`removeAttribute`',
	{
		messages: {
			getAttribute: 'Prefer Element#getAttribute to .{{name}}/$.{{name}}',
			setAttribute: 'Prefer Element#setAttribute to .{{name}}/$.{{name}}',
			removeAttribute: 'Prefer Element#removeAttribute to .{{name}}/$.{{name}}'
		},
		report: ( node, name ) => ( {
			messageId: name === 'removeAttr' ? 'removeAttribute' :
				node.arguments.length === 2 ? 'setAttribute' : 'getAttribute',
			data: { name }
		} )
	}
);
