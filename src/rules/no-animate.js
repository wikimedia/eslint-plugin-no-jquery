'use strict';

const utils = require( '../utils.js' );

const methods = [ 'animate', 'stop', 'finish' ];

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description:
				'Disallows the ' + methods.map( utils.jQueryCollectionLink ).join( '/' ) +
				' methods. Use the `allowScroll` option to allow animations which are just used for scrolling. Prefer CSS transitions.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowScroll: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	},

	create: ( context ) => ( {
		'CallExpression:exit': ( node ) => {
			if (
				node.callee.type !== 'MemberExpression' ||
					!methods.includes( node.callee.property.name )
			) {
				return;
			}
			const allowScroll = context.options[ 0 ] && context.options[ 0 ].allowScroll;
			const name = node.callee.property.name;
			if ( allowScroll ) {
				if ( name === 'stop' || name === 'finish' ) {
					// We can't tell what animation we are stopping, so assume
					// it is an allowed scroll
					return;
				} else if ( name === 'animate' ) {
					const arg = node.arguments[ 0 ];
					// Check properties list has more than just scrollTop/scrollLeft
					if ( arg && arg.type === 'ObjectExpression' ) {
						if (
							arg.properties.every(
								( prop ) => prop.key.name === 'scrollTop' || prop.key.name === 'scrollLeft'
							)
						) {
							return;
						}
					}
				}
			}

			if ( utils.isjQuery( context, node ) ) {
				context.report( {
					node,
					message: allowScroll ?
						'Prefer CSS transitions to .animate' :
						'Prefer CSS transitions or CSS scroll-behaviour to .animate'
				} );
			}
		}
	} )
};
