'use strict';

function traverse( node, test ) {
	while ( node ) {
		switch ( node.type ) {
			case 'CallExpression':
				node = node.callee;
				break;
			case 'MemberExpression':
				node = node.object;
				if ( node.property ) {
					if ( node.property.type === 'Identifier' ) {
						// e.g. $foo in this.$foo.bar(), returns true
						// or foo in $this.foo.bar(), returns false
						return test( node.property );
					}
					if ( node.property.type === 'Literal' ) {
						// e.g. 0 in $foo[0].bar()
						// or 'prop' in $foo['prop'].bar()
						return false;
					}
				}
				break;
			case 'Identifier':
				return test( node );
			default:
				return false;
		}
	}
}

// Traverses from a node up to its root parent to determine if it
// originated from a jQuery `$()` function.
//
// node - The CallExpression node to start the traversal.
//
// Examples
//
//   Returns true for:
//     $('div').find('p').focus()
//     $div.find('p').focus()
//     this.$div.find('p').focus()
//
//   Returns false for:
//     div.focus()
//     $div[0].focus()
//     $div.remove.bind()
//
// Returns true if the function call node is attached to a jQuery element set.
function isjQuery( node ) {
	return traverse( node, ( id ) => !!id && id.name.startsWith( '$' ) );
}

function createRule( create ) {
	return {
		meta: {
			docs: {},
			schema: []
		},
		create: create
	};
}

function createCollectionMethodRule( methods, message ) {
	methods = Array.isArray( methods ) ? methods : [ methods ];
	return createRule( function ( context ) {
		return {
			CallExpression: function ( node ) {
				if ( node.callee.type !== 'MemberExpression' ) {
					return;
				}
				const name = node.callee.property.name;
				if (
					methods.indexOf( name ) === -1 ||
					node.callee.object.name === '$'
				) {
					return;
				}

				if ( isjQuery( node ) ) {
					context.report( {
						node: node,
						message: typeof message === 'function' ?
							message( node ) :
							message || '$.' + name + ' is not allowed'
					} );
				}
			}
		};
	} );
}

function createCollectionPropertyRule( property, message ) {
	return createRule( function ( context ) {
		return {
			MemberExpression: function ( node ) {
				const name = node.property.name;
				if (
					name !== property ||
					node.parent.callee === node
				) {
					return;
				}

				if ( isjQuery( node ) ) {
					context.report( {
						node: node,
						message: typeof message === 'function' ?
							message( node ) :
							message || '$.' + name + ' is not allowed'
					} );
				}
			}
		};
	} );
}

function createUtilMethodRule( methods, message ) {
	methods = Array.isArray( methods ) ? methods : [ methods ];
	return createRule( function ( context ) {
		return {
			CallExpression: function ( node ) {
				if ( node.callee.type !== 'MemberExpression' ) {
					return;
				}
				const name = node.callee.property.name;
				if (
					methods.indexOf( name ) === -1 ||
					node.callee.object.name !== '$'
				) {
					return;
				}

				context.report( {
					node: node,
					message: typeof message === 'function' ?
						message( node ) :
						message || '$.' + name + ' is not allowed'
				} );
			}
		};
	} );
}

function createUtilPropertyRule( property, message ) {
	return createRule( function ( context ) {
		return {
			MemberExpression: function ( node ) {
				if ( node.object.name !== '$' ) {
					return;
				}
				const name = node.property.name;
				if ( name !== property ) {
					return;
				}

				context.report( {
					node: node,
					message: typeof message === 'function' ?
						message( node ) :
						message || '$.' + name + ' is not allowed'
				} );
			}
		};
	} );
}

module.exports = {
	isjQuery: isjQuery,
	createCollectionMethodRule: createCollectionMethodRule,
	createCollectionPropertyRule: createCollectionPropertyRule,
	createUtilMethodRule: createUtilMethodRule,
	createUtilPropertyRule: createUtilPropertyRule
};
