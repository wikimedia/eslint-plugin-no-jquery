'use strict';

const utils = require( './utils.js' );

module.exports = {
	meta: {
		docs: {},
		schema: []
	},

	create: function ( context ) {
		const forbidden = [ 'show', 'hide', 'toggle' ];

		return {
			CallExpression: function ( node ) {
				if (
					node.callee.type !== 'MemberExpression' ||
					forbidden.indexOf( node.callee.property.name ) === -1 ||
					node.arguments.length === 0
				) {
					return;
				}
				if (
					node.arguments.length === 1 &&
					node.callee.property.name === 'toggle'
				) {
					let possibleBool = true;
					const arg = node.arguments[ 0 ];
					if ( arg.type === 'Literal' ) {
						possibleBool = typeof arg.value === 'boolean';
					}
					if ( arg.type === 'ObjectExpression' ) {
						possibleBool = false;
					}
					if ( possibleBool ) {
						return;
					}
				}

				if ( utils.isjQuery( node ) ) {
					context.report( {
						node: node,
						message: 'Prefer CSS transitions to $.' + node.callee.property.name
					} );
				}
			}
		};
	}
};
