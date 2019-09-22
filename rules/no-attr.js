'use strict';

const utils = require( './utils.js' );

module.exports = {
	meta: {
		docs: {
			description: 'Disallows the .attr method and $.attr utility. Prefer Element#getAttribute/setAttribute.'
		},
		schema: []
	},

	create: function ( context ) {
		return {
			CallExpression: function ( node ) {
				if (
					node.callee.type !== 'MemberExpression' ||
					node.callee.property.name !== 'attr'
				) {
					return;
				}

				if ( utils.isjQuery( node ) ) {
					const getOrSet = node.arguments.length === 2 ? 'set' : 'get';
					context.report( {
						node: node,
						message: `Prefer Element#${getOrSet}Attribute to attr`
					} );
				}
			}
		};
	}
};
