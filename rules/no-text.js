'use strict';

const utils = require( './utils.js' );

module.exports = {
	meta: {
		docs: {
			description: 'Disallows the .text method and $.text utility. Prefer Node#textContent.'
		},
		schema: []
	},

	create: function ( context ) {
		return {
			CallExpression: function ( node ) {
				if (
					node.callee.type !== 'MemberExpression' ||
					node.callee.property.name !== 'text'
				) {
					return;
				}

				if ( utils.isjQuery( node ) ) {
					context.report( {
						node: node,
						message: 'Prefer Node#textContent to $.text'
					} );
				}
			}
		};
	}
};
