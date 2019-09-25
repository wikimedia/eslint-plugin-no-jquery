'use strict';

const utils = require( './utils.js' );

module.exports = {
	meta: {
		docs: {
			description: 'Disallows the .data method and $.data utility. Prefer WeakMap.'
		},
		schema: []
	},

	create: function ( context ) {
		return {
			CallExpression: function ( node ) {
				if (
					node.callee.type !== 'MemberExpression' ||
					!utils.isjQuery( node.callee )
				) {
					return;
				}

				const name = node.callee.property.name;
				switch ( name ) {
					case 'data':
					case 'removeData':
						context.report( {
							node: node,
							message: 'Prefer WeakMap to ' + name
						} );
				}
			}
		};
	}
};
