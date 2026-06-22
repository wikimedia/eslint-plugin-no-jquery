'use strict';

const utils = require( '../utils.js' );

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallows `$.fx`.'
		},
		schema: [],
		messages: {
			default: '$.fx is not allowed'
		}
	},

	create: ( context ) => ( {
		MemberExpression: ( node ) => {
			if (
				!utils.isjQueryConstructor( context, node.object.name ) ||
					node.property.name !== 'fx'
			) {
				return;
			}

			context.report( {
				node,
				messageId: 'default'
			} );
		}
	} )
};
