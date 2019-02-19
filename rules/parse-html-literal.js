'use strict';

// HTML regex (modified from jQuery)
const rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
// Single tag regex (from jQuery)
const rsingleTag = /^<([a-z][^/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

function allLiteral( node ) {
	if ( node.type === 'BinaryExpression' ) {
		return allLiteral( node.left ) && allLiteral( node.right );
	} else {
		return node.type === 'Literal';
	}
}

module.exports = {
	meta: {
		docs: {},
		schema: []
	},

	create: function ( context ) {
		return {
			CallExpression: function ( node ) {
				if ( node.callee.type === 'Identifier' ) {
					if (
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
						!rquickExpr.exec( value ) ||
						rsingleTag.exec( value )
					) {
						return;
					}
				} else {
					if (
						node.callee.type !== 'MemberExpression' ||
						node.callee.object.name !== '$' ||
						node.callee.property.name !== 'parseHTML'
					) {
						return;
					}
					const arg = node.arguments[ 0 ];
					if (
						!arg ||
						!allLiteral( arg )
					) {
						return;
					}
				}

				context.report( {
					node: node,
					message: 'Prefer DOM building to $.parseHTML on literals'
				} );
			}
		};
	}
};
