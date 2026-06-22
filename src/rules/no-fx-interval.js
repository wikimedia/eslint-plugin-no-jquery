'use strict';

const utils = require( '../utils.js' );

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallows ' + utils.jQueryGlobalLink( 'fx.interval' ) + '.'
		},
		schema: [],
		messages: {
			default: '$.fx.interval is not allowed'
		}
	},

	create: ( context ) => ( {
		MemberExpression: ( node ) => {
			if (
				!utils.isjQueryConstructor( context, node.object.name ) ||
					node.property.name !== 'fx' ||
					!node.parent.property ||
					node.parent.property.name !== 'interval'
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
