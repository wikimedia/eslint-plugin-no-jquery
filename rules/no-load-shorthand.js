'use strict';

const utils = require( './utils.js' );

module.exports = {
	meta: {
		docs: {
			description: 'Disallows the .load method when used as a shorthand for `.on( \'load\', function )` or `.trigger( \'load\' )`. Prefer $.on or $.trigger.'
		},
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
					!utils.isFunction( node.arguments[ 0 ] )
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
