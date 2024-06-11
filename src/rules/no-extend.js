'use strict';

const utils = require( '../utils.js' );

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallows the ' + utils.jQueryGlobalLink( 'extend' ) + ' utility. Prefer `Object.assign` or the spread operator.',
			recommended: true
		},
		fixable: 'code',
		schema: [
			{
				type: 'object',
				properties: {
					allowDeep: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	},

	create: ( context ) => ( {
		'CallExpression:exit': ( node ) => {
			if ( node.callee.type !== 'MemberExpression' ) {
				return;
			}
			const name = node.callee.property.name;
			if (
				name !== 'extend' ||
				!utils.isjQueryConstructor( context, node.callee.object.name )
			) {
				return;
			}
			if ( node.arguments.length === 1 ) {
				// $.extend with one argument merges the object onto the jQuery namespace
				return;
			}
			const allowDeep = context.options[ 0 ] && context.options[ 0 ].allowDeep;
			const isDeep = node.arguments[ 0 ] && node.arguments[ 0 ].value === true;
			if ( allowDeep && isDeep ) {
				return;
			}

			context.report( {
				node,
				message: 'Prefer Object.assign or the spread operator to $.extend',
				fix: function ( fixer ) {
					if ( !isDeep ) {
						return fixer.replaceText( node.callee, 'Object.assign' );
					}
				}
			} );
		}
	} )
};
