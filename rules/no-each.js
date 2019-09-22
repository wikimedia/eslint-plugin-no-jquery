'use strict';

const utils = require( './utils.js' );

module.exports = {
	meta: {
		docs: {
			description: 'Disallows the .each method and $.each utility. Prefer Array#forEach.'
		},
		schema: []
	},

	create: function ( context ) {
		return {
			CallExpression: function ( node ) {
				if (
					node.callee.type !== 'MemberExpression' ||
					node.callee.property.name !== 'each'
				) {
					return;
				}

				if ( utils.isjQuery( node ) ) {
					context.report( {
						node: node,
						message: 'Prefer Array#forEach to $.each'
					} );
				}
			}
		};
	}
};
