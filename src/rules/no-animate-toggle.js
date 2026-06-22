'use strict';

const utils = require( '../utils.js' );

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description:
				'Disallows the duration argument when using the ' + utils.jQueryCollectionLink( 'show' ) +
				', ' + utils.jQueryCollectionLink( 'hide' ) + ' & ' + utils.jQueryCollectionLink( 'toggle' ) +
				' methods. Prefer CSS transitions.'
		},
		schema: [],
		messages: {
			default: 'Prefer CSS transitions to .{{method}}'
		}
	},

	create: ( context ) => {
		const forbidden = [ 'show', 'hide', 'toggle' ];

		return {
			'CallExpression:exit': ( node ) => {
				if (
					node.callee.type !== 'MemberExpression' ||
					!forbidden.includes( node.callee.property.name ) ||
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

				if ( utils.isjQuery( context, node ) ) {
					context.report( {
						node,
						messageId: 'default',
						data: { method: node.callee.property.name }
					} );
				}
			}
		};
	}
};
