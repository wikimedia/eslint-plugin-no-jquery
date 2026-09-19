'use strict';

const utils = require( '../utils.js' );

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description:
				'Disallows the ' + utils.jQueryGlobalLink( 'extend' ) + ' utility. Prefer `Object.assign` or the spread operator. ' +
				'Use the `allowDeep` option to allow using the method with the `deep` argument.\n\n' +
				'This rule does not autofix because `$.extend` skips properties with `undefined` values, ' +
				'while `Object.assign` and the spread operator copy them.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowDeep: {
						type: 'boolean',
						description: 'Allow when used with the `deep` argument'
					}
				},
				additionalProperties: false
			}
		],
		defaultOptions: [
			{ allowDeep: false }
		],
		messages: {
			default: 'Prefer Object.assign or the spread operator to $.extend'
		}
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
				messageId: 'default'
			} );
		}
	} )
};
