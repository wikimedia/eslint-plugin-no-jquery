'use strict';

const utils = require( './utils.js' );

module.exports = {
	meta: {
		docs: {
			description: 'Disallows using the ready event on the document.'
		},
		schema: []
	},

	create: function ( context ) {
		return {
			CallExpression: function ( node ) {
				if (
					node.callee.type !== 'MemberExpression' ||
					node.callee.property.name !== 'on'
				) {
					return;
				}
				const arg = node.arguments[ 0 ];
				if ( !arg || arg.value !== 'ready' ) {
					return;
				}

				if ( utils.isjQuery( context, node.callee ) ) {
					context.report( {
						node: node,
						message: '.on("ready") is not allowed'
					} );
				}
			}
		};
	}
};
