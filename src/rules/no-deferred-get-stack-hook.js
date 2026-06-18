'use strict';

const utils = require( '../utils.js' );

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallows the `$.Deferred.getStackHook` property. Use `$.Deferred.getErrorHook` instead.'
		},
		schema: [],
		messages: {
			default: '$.Deferred.getStackHook is not allowed. Use $.Deferred.getErrorHook instead.'
		}
	},

	create: ( context ) => ( {
		'MemberExpression:exit': ( node ) => {
			if (
				node.property.name !== 'getStackHook' ||
				node.object.type !== 'MemberExpression' ||
				node.object.property.name !== 'Deferred' ||
				!utils.isjQueryConstructor( context, node.object.object.name )
			) {
				return;
			}

			context.report( {
				node,
				messageId: 'default'
			} );
		}
	} )
};
