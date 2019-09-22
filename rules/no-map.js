'use strict';

const utils = require( './utils.js' );

module.exports = {
	meta: {
		docs: {
			description: 'Disallows the .map method and $.map utility. Prefer Array#map.'
		},
		schema: []
	},

	create: function ( context ) {
		return {
			CallExpression: function ( node ) {
				if (
					node.callee.type !== 'MemberExpression' ||
					node.callee.property.name !== 'map'
				) {
					return;
				}

				if ( utils.isjQuery( node ) ) {
					context.report( {
						node: node,
						message: 'Prefer Array#map to $.map'
					} );
				}
			}
		};
	}
};
