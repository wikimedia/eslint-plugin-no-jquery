'use strict';

const utils = require( './utils.js' );

// $(function(){})
function isDirect( node ) {
	return (
		node.callee.type === 'Identifier' &&
		node.callee.name === '$' &&
		node.arguments[ 0 ] &&
		utils.isFunction( node.arguments[ 0 ] )
	);
}

// $(document).ready()
function isChained( node ) {
	return (
		node.callee.type === 'MemberExpression' &&
		node.callee.property.name === 'ready' &&
		utils.isjQuery( node )
	);
}

module.exports = {
	meta: {
		docs: {
			description: 'Disallows the document ready event, either `$( function() {} )` or `$( document ).ready()`.'
		},
		schema: []
	},

	create: function ( context ) {
		return {
			CallExpression: function ( node ) {
				if ( isDirect( node ) || isChained( node ) ) {
					context.report( {
						node: node,
						message: '$.ready is not allowed'
					} );
				}
			}
		};
	}
};
