'use strict';

const utils = require( '../utils.js' );
// htmlStrings or jQuery collections
const htmlOrCollectionMethods = [ 'append', 'prepend', 'before', 'after', 'replaceWith' ];
// htmlStrings, selectors or jQuery collections
const htmlOrSelectorOrCollectionMethods = [ 'add', 'appendTo', 'prependTo', 'insertBefore', 'insertAfter' ];
const allMethods = htmlOrCollectionMethods.concat( htmlOrSelectorOrCollectionMethods );

function alljQueryOrEmpty( context, node ) {
	if ( node.type === 'ConditionalExpression' ) {
		return alljQueryOrEmpty( context, node.consequent ) &&
			alljQueryOrEmpty( context, node.alternate );
	} else if ( node.type === 'Literal' ) {
		return node.value === null || (
			typeof node.value === 'string' && node.value.match( /^\s*$/ )
		);
	} else if ( node.type === 'Identifier' && node.name === 'undefined' ) {
		return true;
	} else {
		return utils.isjQuery( context, node );
	}
}

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallows using ' + allMethods.map( utils.jQueryCollectionLink ).join( '/' ) +
			' to inject HTML, in order to prevent possible XSS bugs.'
		},
		schema: []
	},

	create: ( context ) => ( {
		'CallExpression:exit': ( node ) => {
			if ( !(
				node.callee.type === 'MemberExpression' &&
				allMethods.includes( node.callee.property.name )
			) ) {
				return;
			}
			if ( node.arguments.every( ( arg ) => alljQueryOrEmpty( context, arg ) ) ) {
				return;
			}
			if ( htmlOrSelectorOrCollectionMethods.includes( node.callee.property.name ) ) {
				if ( node.arguments.every( ( arg ) => !utils.isHtmlString( arg ) ) ) {
					return;
				}
			}

			if ( utils.isjQuery( context, node.callee ) ) {
				context.report( {
					node,
					message: 'Avoid injection of possibly unescaped HTML. Create DOM elements instead, or use .text.'
				} );
			}
		}
	} )
};
