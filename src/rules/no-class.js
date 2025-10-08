'use strict';

const utils = require( '../utils.js' );

const methods = [ 'addClass', 'hasClass', 'removeClass', 'toggleClass' ];

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallows the ' + methods.map( utils.jQueryCollectionLink ).join( '/' ) +
			' methods. User the `onlyDeprecated` option to only report deprecated usages. Prefer `Element#classList`.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					onlyDeprecated: {
						type: 'boolean',
						description: 'Only report deprecated usages of the methods.'
					}
				},
				additionalProperties: false
			}
		],
		defaultOptions: [
			{ onlyDeprecated: false }
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
			const name = node.callee.property.name;
			const onlyDeprecated = context.options[ 0 ] && context.options[ 0 ].onlyDeprecated;

			if ( !onlyDeprecated ) {
				if ( utils.isjQuery( context, node.callee ) ) {
					const message = node === true ?
						'Prefer `Element#classList`' :
						`Prefer Element#classList to .${ name }`;
					context.report( {
						node,
						message
					} );
				}
			} else {
				if ( name !== 'toggleClass' || utils.isjQueryConstructor( context, node.callee.object.name ) ) {
					return;
				}

				if ( node.arguments.length >= 2 ) {
					return;
				}
				if ( node.arguments.length === 1 ) {
					const arg = node.arguments[ 0 ];
					if (
						!(
							arg.type === 'Literal' &&
							( arg.value === true || arg.value === false )
						) &&
						!(
							arg.type === 'Identifier' && arg.name === 'undefined'
						)
					) {
						return;
					}
				}

				if ( utils.isjQuery( context, node.callee ) ) {
					context.report( {
						node,
						message: '.toggleClass(boolean|undefined) is deprecated'
					} );
				}
			}
		}
	} )
};
