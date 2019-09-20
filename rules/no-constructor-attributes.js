'use strict';
module.exports = {
	meta: {
		docs: {},
		schema: []
	},

	create: function ( context ) {
		return {
			CallExpression: function ( node ) {
				if ( !(
					node.callee.type === 'Identifier' &&
					node.callee.name === '$' &&
					node.arguments[ 1 ] &&
					node.arguments[ 1 ].type === 'ObjectExpression'
				) ) {
					return;
				}

				context.report( {
					node: node,
					message: 'Prefer $.attr to constructor attributes'
				} );
			}
		};
	}
};
