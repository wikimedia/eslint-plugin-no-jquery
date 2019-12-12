'use strict';

const utils = require( './utils.js' );

// HTML regex (modified from jQuery)
const rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
// Single tag regex (from jQuery)
const rsingleTag = /^<([a-z][^/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
const rsingleTagMinimal = /^<([a-z][^/\0>:\x20\t\r\n\f]*)>$/i;
const rsingleTagSelfClosing = /^<([a-z][^/\0>:\x20\t\r\n\f]*)\/>$/i;

function allLiteral( node ) {
	if ( node.type === 'BinaryExpression' ) {
		return allLiteral( node.left ) && allLiteral( node.right );
	} else {
		return node.type === 'Literal';
	}
}

function joinLiterals( node ) {
	if ( node.type === 'BinaryExpression' ) {
		return joinLiterals( node.left ) + joinLiterals( node.right );
	} else if ( node.type === 'Literal' ) {
		return node.value;
	} else {
		throw new Error( 'Non-literal node passed to joinLiteral' );
	}
}

module.exports = {
	meta: {
		docs: {
			description: 'Disallows parsing of HTML literal strings using either the jQuery method `$()` or `$.parseHTML`. ' +
				'Single tags are still allowed for creating new nodes as these don\'t tirgger the HTML parser. ' +
				'DOM build and manipulation methods should be used instead.\n\n' +
				'The format of single tags can be specified using the `singleTagStyle` option:\n' +
				'* `"minimal"` (default) no whitespace or self-closing i.e. `<div>`\n' +
				'* `"self-closing"` no whitespace and self-closing i.e. `<div/>`\n' +
				'* `"any"` no style enforced\n'
		},
		schema: [
			{
				type: 'object',
				properties: {
					singleTagStyle: {
						enum: [ 'minimal', 'self-closing', 'any' ]
					}
				},
				additionalProperties: false
			}
		]
	},

	create: function ( context ) {
		return {
			CallExpression: function ( node ) {
				let allowSingle,
					message = 'Prefer DOM building to parsing HTML literals';

				if ( node.callee.type === 'Identifier' ) {
					if ( !(
						utils.isjQueryConstructor( context, node.callee.name ) &&
						node.arguments[ 0 ] &&
						(
							node.arguments[ 0 ].type === 'Literal' ||
							node.arguments[ 0 ].type === 'BinaryExpression'
						)
					) ) {
						return;
					}
					allowSingle = true;
				} else if ( node.callee.type === 'MemberExpression' ) {
					if (
						utils.isjQueryConstructor( context, node.callee.object.name ) &&
						node.callee.property.name === 'parseHTML'
					) {
						allowSingle = false;
					} else if (
						[ 'html', 'append', 'add' ].indexOf( node.callee.property.name ) !== -1 &&
						utils.isjQuery( context, node )
					) {
						allowSingle = true;
					} else {
						return;
					}
				} else {
					return;
				}

				const arg = node.arguments[ 0 ];
				if ( allowSingle ) {
					const value = arg && allLiteral( arg ) && joinLiterals( arg );
					if ( !( typeof value === 'string' && value ) || !rquickExpr.exec( value ) ) {
						// Empty or non-string, or non-HTML
						return;
					}
					if ( rsingleTag.exec( value ) ) {
						// Single tag
						const singleTagStyle = ( context.options[ 0 ] && context.options[ 0 ].singleTagStyle ) || 'minimal';
						if ( singleTagStyle === 'minimal' ) {
							if ( !rsingleTagMinimal.exec( value ) ) {
								message = 'Single tag must use the format: <tagname>';
							} else {
								return;
							}
						} else if ( singleTagStyle === 'self-closing' ) {
							if ( !rsingleTagSelfClosing.exec( value ) ) {
								message = 'Single tag must use the format: <tagname/>';
							} else {
								return;
							}
						} else {
							// singleTagStyle === 'any'
							return;
						}
					}
				} else if ( !( arg && allLiteral( arg ) ) ) {
					// Non literals passed to $.parseHTML
					return;
				}

				context.report( {
					node: node,
					message: message
				} );
			}
		};
	}
};
