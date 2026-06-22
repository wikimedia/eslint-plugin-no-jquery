'use strict';

const utils = require( '../utils.js' );

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallows variable names which don\'t match `variablePattern` in settings (by default a `$`-prefix).'
		},
		schema: [],
		messages: {
			default: 'jQuery collection names must match the variablePattern'
		}
	},

	create: ( context ) => {
		function test( node, left, right ) {
			if (
				!utils.isjQuery( context, left ) &&
				// If the variable name is computed (e.g. foo[bar]) we
				// can't be sure this is not correctly named.
				!left.computed &&
				// right can be null, e.g. `var x;`
				right && utils.isjQuery( context, right )
			) {
				context.report( {
					node,
					messageId: 'default'
				} );
			}
		}

		return {
			'AssignmentExpression:exit': ( node ) => {
				test( node, node.left, node.right );
			},
			'VariableDeclarator:exit': ( node ) => {
				test( node, node.id, node.init );
			}
		};
	}
};
