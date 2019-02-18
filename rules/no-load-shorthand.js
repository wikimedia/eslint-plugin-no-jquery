'use strict';

const utils = require( './utils.js' );

module.exports = {
	meta: {
		docs: {},
		schema: []
	},

	create: function ( context ) {
		return {
			CallExpression: function ( node ) {
				if (
					node.callee.type !== 'MemberExpression' ||
					node.callee.object.name === '$' ||
					node.callee.property.name !== 'load' ||
					!node.arguments[ 0 ] ||
					node.arguments[ 0 ].type !== 'FunctionExpression'
				) {
					return;
				}

				if ( utils.isjQuery( node ) ) {
					context.report( {
						node: node,
						message: 'Prefer $.on or $.trigger to $.load'
					} );
				}
			}
		};
	}
};
