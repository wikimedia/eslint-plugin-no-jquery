'use strict';

// HTML regex (modified from jQuery)
const rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

module.exports = {
	meta: {
		docs: {},
		schema: []
	},

	create: function ( context ) {
		return {
			CallExpression: function ( node ) {
				if (
					node.callee.type !== 'Identifier' ||
					node.callee.name !== '$' ||
					!node.arguments[ 0 ] ||
					node.arguments[ 0 ].type !== 'Literal'
				) {
					return;
				}
				const value = node.arguments[ 0 ].value;
				if (
					typeof value !== 'string' ||
					!value ||
					value === '#' ) {
					return;
				}

				// Simple HTML check (copied from jQuery)
				if (
					value[ 0 ] === '<' &&
					value[ value.length - 1 ] === '>' &&
					value.length >= 3
				) {
					return;
				}
				if ( rquickExpr.exec( value ) ) {
					return;
				}

				const selectorContext = node.arguments[ 1 ];
				if ( selectorContext ) {
					if (
						selectorContext.type !== 'Literal' &&
						!(
							selectorContext.type === 'Identifier' &&
							selectorContext.name === 'undefined'
						)
					) {
						return;
					}
					if ( selectorContext.value === '#' ) {
						return;
					}
				}

				context.report( {
					node: node,
					message: 'Global selectors are not allowed'
				} );
			}
		};
	}
};
