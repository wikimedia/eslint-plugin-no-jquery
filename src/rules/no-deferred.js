'use strict';

const utils = require( '../utils.js' );

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallows ' + utils.jQueryGlobalLink( 'Deferred' ) + ' constructor. Prefer `Promise`.'
		},
		schema: [],
		messages: {
			default: 'Prefer Promise to $.Deferred'
		}
	},

	create: ( context ) => {
		function enforce( node ) {
			if (
				node.callee.type !== 'MemberExpression' ||
				!utils.isjQueryConstructor( context, node.callee.object.name ) ||
				node.callee.property.name !== 'Deferred'
			) {
				return;
			}

			context.report( {
				node,
				messageId: 'default'
			} );
		}

		return {
			'CallExpression:exit': enforce,
			NewExpression: enforce
		};
	}
};
