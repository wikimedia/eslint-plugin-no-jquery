'use strict';

const utils = require( './utils.js' );

module.exports = {
	meta: {
		docs: {
			description: 'Disallows the .find method and $.find utility. Prefer Document#querySelectorAll.'
		},
		schema: []
	},

	create: function ( context ) {
		return {
			CallExpression: function ( node ) {
				if (
					node.callee.type !== 'MemberExpression' ||
					node.callee.property.name !== 'find'
				) {
					return;
				}

				if ( utils.isjQuery( node ) ) {
					context.report( {
						node: node,
						message: 'Prefer Document#querySelectorAll to $.find'
					} );
				}
			}
		};
	}
};
