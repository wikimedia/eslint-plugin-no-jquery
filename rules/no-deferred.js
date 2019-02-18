'use strict';

module.exports = {
	meta: {
		docs: {},
		schema: []
	},

	create: function ( context ) {
		function enforce( node ) {
			if (
				node.callee.type !== 'MemberExpression' ||
				node.callee.object.name !== '$' ||
				node.callee.property.name !== 'Deferred'
			) {
				return;
			}

			context.report( {
				node: node,
				message: 'Prefer Promise to $.Deferred'
			} );
		}

		return {
			CallExpression: enforce,
			NewExpression: enforce
		};
	}
};
