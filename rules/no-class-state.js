'use strict';

const utils = require( './utils.js' );

module.exports = {
	meta: {
		docs: {},
		schema: []
	},

	create: function ( context ) {
		return {
			CallExpression: function ( node ) {
				if ( !(
					node.callee.type === 'MemberExpression' && (
						node.callee.property.name === 'hasClass' ||
						// toggleClass with one argument will check if the
						// class is already in the DOM before deciding what to do,
						// so it is equivalent to using hasClass.
						(
							node.callee.property.name === 'toggleClass' &&
							node.arguments.length === 1
						)
					)
				) ) {
					return;
				}

				if ( utils.isjQuery( node ) ) {
					context.report( {
						node: node,
						message: 'Don\'t query the DOM state information'
					} );
				}
			}
		};
	}
};
