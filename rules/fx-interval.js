'use strict';

module.exports = {
	meta: {
		docs: {},
		schema: []
	},

	create: function ( context ) {
		return {
			MemberExpression: function ( node ) {
				if (
					node.object.name !== '$' ||
					node.property.name !== 'fx' ||
					!node.parent.property ||
					node.parent.property.name !== 'interval'
				) {
					return;
				}

				context.report( {
					node: node,
					message: '$.fx.interval is not allowed'
				} );
			}
		};
	}
};
