'use strict';

const utils = require( '../utils.js' );

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallows `$.fx`.'
		},
		schema: []
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
				message: '$.fx is not allowed'
			} );
		}
	} )
};
