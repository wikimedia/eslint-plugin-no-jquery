'use strict';

const utils = require( './utils.js' );

module.exports = {
	meta: {
		docs: {
			description: 'Disallows `.hasClass` and `.toggleClass` to discourage querying the DOM for state information. `.toggleClass` may be used with a boolean argument as then in behave like `.addClass`/`.removeClass`.'
		},
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

				if ( utils.isjQuery( context, node.callee ) ) {
					context.report( {
						node: node,
						message: 'Don\'t query the DOM for state information'
					} );
				}
			}
		};
	}
};
