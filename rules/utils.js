'use strict';

// Methods which always return something else than a jQuery collection
const nonCollectionReturningMethods = [ 'get', 'hasClass', 'index', 'is', 'position', 'promise', 'serialize', 'serializeArray', 'toArray', 'triggerHandler' ];
// Methods that return something else than a jQuery collection when called without arguments
const nonCollectionReturningAccessors = [ 'height', 'html', 'innerHeight', 'innerWidth', 'offset', 'scrollLeft', 'scrollTop', 'text', 'val', 'width' ];
// Methods that return something else than a jQuery collection when called with a single argument
const nonCollectionReturningValueAccessors = [ 'attr', 'css', 'data', 'prop' ];

// Object.keys( $.fn ).filter( ( k ) => typeof $.fn[k] === 'function' ).sort()
const allKnownMethods = [ 'add', 'addBack', 'addClass', 'after', 'ajaxComplete', 'ajaxError', 'ajaxSend', 'ajaxStart', 'ajaxStop', 'ajaxSuccess', 'animate', 'append', 'appendTo', 'attr', 'before', 'bind', 'blur', 'change', 'children', 'clearQueue', 'click', 'clone', 'closest', 'constructor', 'contents', 'contextmenu', 'css', 'data', 'dblclick', 'delay', 'delegate', 'dequeue', 'detach', 'each', 'empty', 'end', 'eq', 'extend', 'fadeIn', 'fadeOut', 'fadeTo', 'fadeToggle', 'filter', 'find', 'finish', 'first', 'focus', 'focusin', 'focusout', 'get', 'has', 'hasClass', 'height', 'hide', 'hover', 'html', 'index', 'init', 'innerHeight', 'innerWidth', 'insertAfter', 'insertBefore', 'is', 'keydown', 'keypress', 'keyup', 'last', 'load', 'map', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'next', 'nextAll', 'nextUntil', 'not', 'off', 'offset', 'offsetParent', 'on', 'one', 'outerHeight', 'outerWidth', 'parent', 'parents', 'parentsUntil', 'position', 'prepend', 'prependTo', 'prev', 'prevAll', 'prevUntil', 'promise', 'prop', 'pushStack', 'queue', 'ready', 'remove', 'removeAttr', 'removeClass', 'removeData', 'removeProp', 'replaceAll', 'replaceWith', 'resize', 'scroll', 'scrollLeft', 'scrollTop', 'select', 'serialize', 'serializeArray', 'show', 'siblings', 'slice', 'slideDown', 'slideToggle', 'slideUp', 'stop', 'submit', 'text', 'toArray', 'toggle', 'toggleClass', 'trigger', 'triggerHandler', 'unbind', 'undelegate', 'unwrap', 'val', 'width', 'wrap', 'wrapAll', 'wrapInner' ];

function isFunction( node ) {
	return node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression';
}

function traverse( node, variableTest, constructorTest ) {
	while ( node ) {
		switch ( node.type ) {
			case 'CallExpression':
				if ( node.callee.type === 'MemberExpression' && node.callee.property.type === 'Identifier' ) {
					const name = node.callee.property.name;

					if ( constructorTest( node.callee.object ) ) {
						// Utilities never return collections
						return false;
					} else {
						if ( nonCollectionReturningMethods.indexOf( name ) !== -1 ) {
							// e.g. $foo.toArray()
							return false;
						}

						if (
							nonCollectionReturningAccessors.indexOf( name ) !== -1 &&
							node.arguments.length === 0
						) {
							// e.g. $foo.val()
							return false;
						}

						if (
							nonCollectionReturningValueAccessors.indexOf( name ) !== -1 && (
								node.arguments.length === 0 || (
									node.arguments.length === 1 &&
									node.arguments[ 0 ].type !== 'ObjectExpression'
								)
							)
						) {
							// Key-value getter-setters may not return a collection if
							//  - no arguments are passed, e.g. $foo.data()
							//  - one argument is passed which isn't a plain object,
							//    e.g. $foo.data("bar")
							return false;
						}

						if (
							( name === 'outerWidth' || name === 'outerHeight' ) && (
								node.arguments.length === 0 || (
									node.arguments.length === 1 && !(
										node.arguments[ 0 ].type === 'Literal' &&
										typeof node.arguments[ 0 ].value === 'number'
									) && !isFunction( node.arguments[ 0 ] )
								)
							)
						) {
							// .outerWidth/outerHeight may not return a collection if
							//  - no arguments are passed, e.g. $foo.outerWidth()
							//  - one argument is passed which isn't a number or function,
							//    e.g. $foo.outerWidth(true)
							return false;
						}

						if (
							name === 'queue' && (
								node.arguments.length === 0 || (
									node.arguments.length === 1 &&
									node.arguments[ 0 ].type === 'Literal' &&
									typeof node.arguments[ 0 ].value === 'string'
								)
							)
						) {
							// .queue may not return a collection if
							//  - no arguments are passed, e.g. $foo.queue()
							//  - one argument is passed which is a string,
							//    e.g. $foo.queue('fx')
							return false;
						}

						if ( allKnownMethods.indexOf( name ) === -1 ) {
							// The method is not core jQuery, so we don't know if it returns
							// a collection or not. Assume it doesn't so we don't get false
							// positives
							// e.g. $foo.getMyPluginValue(), returns false
							return false;
						}
					}
				}

				node = node.callee;

				break;
			case 'MemberExpression':
				if ( node.property && node.parent.type !== 'CallExpression' ) {
					if ( node.property.type === 'Identifier' ) {
						if ( node.computed ) {
							// e.g. foo[bar] can't be determined, returns false
							return false;
						}
						// e.g. $foo in this.$foo.bar(), returns true
						// or foo in $this.foo.bar(), returns false
						return variableTest( node.property );
					}
					if ( node.property.type === 'Literal' ) {
						// e.g. 0 in $foo[0].bar()
						// or 'prop' in $foo['prop'].bar()
						return false;
					}
				}
				node = node.object;
				break;
			case 'Identifier':
				if ( node.parent && node.parent.type === 'CallExpression' ) {
					return constructorTest( node );
				} else {
					return variableTest( node ) || constructorTest( node );
				}
			default:
				return false;
		}
	}
}

function isjQueryConstructor( context, name ) {
	const constructorAliases =
		( context.settings && context.settings[ 'no-jquery' ] && context.settings[ 'no-jquery' ].constructorAliases ) ||
		[ '$', 'jQuery' ];
	return constructorAliases.indexOf( name ) !== -1;
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
//     $.each()
//
//   Returns false for:
//     div.focus()
//     $div[0].focus()
//     $div.remove.bind()
//     $method('foo').focus()
//
// Returns true if the function call node is attached to a jQuery element set.
function isjQuery( context, node ) {
	const variablePattern = new RegExp(
		( context.settings && context.settings[ 'no-jquery' ] && context.settings[ 'no-jquery' ].variablePattern ) ||
		'^\\$.'
	);
	return traverse(
		node,
		// variableTest
		( id ) => !!id && variablePattern.test( id.name ),
		// constructorTest
		( id ) => !!id && isjQueryConstructor( context, id.name )
	);
}

/**
 * Create an linting rule
 *
 * @param {Function} create Create function
 * @param {string} description Description
 * @param {string} [fixable] Fixable mode, e.g. 'code'
 * @param {string[]|boolean} [deprecated] Rule is deprecated.
 *  If a string list, the replacedBy rules.
 * @return {Object} Rule
 */
function createRule( create, description, fixable, deprecated ) {
	return {
		meta: {
			docs: {
				description: description,
				deprecated: !!deprecated,
				replacedBy: Array.isArray( deprecated ) ? deprecated : undefined
			},
			fixable: fixable,
			schema: []
		},
		create: create
	};
}

function messageSuffix( message ) {
	let messageString;
	if ( typeof message === 'string' ) {
		messageString = message;
	} else if ( typeof message === 'function' ) {
		messageString = message( true );
	}
	return messageString ? ' ' + messageString + '.' : '';
}

function messageToPlainString( message, node, name, options ) {
	let messageString = ( typeof message === 'function' ?
		message( node ) :
		message || '' ).replace( /`/g, '' ) || '$.' + name + ' is not allowed';

	if ( options.deprecated ) {
		messageString += '. This rule is deprecated';
		if ( Array.isArray( options.deprecated ) ) {
			messageString += ', use ' + options.deprecated.join( ', ' );
		}
		messageString += '.';
	}

	return messageString;
}

/**
 * Create a rule for collection methods
 *
 * @param {string|string[]} methods Method or list of method names
 * @param {string|Function} [message] Message to report. String or function that is passed
 *  the target node, or true to generate context-agnostic message (for documentation).
 * @param {Object} [options] Options
 * @param {string} [options.fixable] Fixable mode, e.g. 'code'
 * @param {Function} [options.fix] Fixing function. First argument is `node`.
 * @param {string[]|boolean} [options.deprecated] Rule is deprecated.
 *  If a string list, the replacedBy rules.
 * @return {Object} Rule
 */
function createCollectionMethodRule( methods, message, options ) {
	options = options || {};

	methods = Array.isArray( methods ) ? methods : [ methods ];

	let description = 'Disallows the `.' + methods.join( '`/`.' ) + '` ' +
			( methods.length > 1 ? 'methods' : 'method' ) + '.';

	description += messageSuffix( message );

	return createRule( function ( context ) {
		return {
			CallExpression: function ( node ) {
				if ( node.callee.type !== 'MemberExpression' ) {
					return;
				}
				const name = node.callee.property.name;
				if (
					methods.indexOf( name ) === -1 ||
					isjQueryConstructor( context, node.callee.object.name )
				) {
					return;
				}

				if ( isjQuery( context, node.callee ) ) {
					context.report( {
						node: node,
						message: messageToPlainString( message, node, name, options ),
						fix: options.fix && options.fix.bind( this, node )
					} );
				}
			}
		};
	}, description, options.fixable, options.deprecated );
}

/**
 * Create a rule for collection property
 *
 * @param {string} property Property name
 * @param {string|Function} [message] Message to report. See createCollectionMethodRule.
 * @param {Object} [options] Options. See createCollectionMethodRule.
 * @return {Object} Rule
 */
function createCollectionPropertyRule( property, message, options ) {
	options = options || {};

	let description = 'Disallows the `$.' + property + '` property.';

	description += messageSuffix( message );

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
				if ( isjQuery( context, node.object ) ) {
					context.report( {
						node: node,
						message: messageToPlainString( message, node, name, options ),
						fix: options.fix && options.fix.bind( this, node )
					} );
				}
			}
		};
	}, description, options.fixable, options.deprecated );
}

/**
 * Create a rule for util methods
 *
 * @param {string|string[]} methods Method or list of method names
 * @param {string|Function} [message] Message to report. See createCollectionMethodRule.
 * @param {Object} [options] Options. See createCollectionMethodRule.
 * @return {Object} Rule
 */
function createUtilMethodRule( methods, message, options ) {
	options = options || {};

	methods = Array.isArray( methods ) ? methods : [ methods ];

	let description = 'Disallows the `$.' + methods.join( '`/`$.' ) + '` ' +
			( methods.length > 1 ? 'utilies' : 'utility' ) + '.';

	description += messageSuffix( message );

	return createRule( function ( context ) {
		return {
			CallExpression: function ( node ) {
				if ( node.callee.type !== 'MemberExpression' ) {
					return;
				}
				const name = node.callee.property.name;
				if (
					methods.indexOf( name ) === -1 ||
					!isjQueryConstructor( context, node.callee.object.name )
				) {
					return;
				}

				context.report( {
					node: node,
					message: messageToPlainString( message, node, name, options ),
					fix: options.fix && options.fix.bind( this, node )
				} );
			}
		};
	}, description, options.fixable, options.deprecated );
}

/**
 * Create a rule for util methods
 *
 * @param {string} property Property name
 * @param {string|Function} [message] Message to report. See createCollectionMethodRule.
 * @param {Object} [options] Options. See createCollectionMethodRule.
 * @return {Object} Rule
 */
function createUtilPropertyRule( property, message, options ) {
	options = options || {};

	let description = 'Disallows the `$.' + property + '` property.';

	description += messageSuffix( message );

	return createRule( function ( context ) {
		return {
			MemberExpression: function ( node ) {
				if ( !isjQueryConstructor( context, node.object.name ) ) {
					return;
				}
				const name = node.property.name;
				if ( name !== property ) {
					return;
				}

				context.report( {
					node: node,
					message: messageToPlainString( message, node, name, options ),
					fix: options.fix && options.fix.bind( this, node )
				} );
			}
		};
	}, description, options.fixable, options.deprecated );
}

/**
 * Create a rule for methods with the same name in a util and collection
 *
 * @param {string|string[]} methods Method or list of method names
 * @param {string|Function} [message] Message to report. See createCollectionMethodRule.
 * @param {Object} [options] Options. See createCollectionMethodRule.
 * @return {Object} Rule
 */
function createCollectionOrUtilMethodRule( methods, message, options ) {
	options = options || {};

	methods = Array.isArray( methods ) ? methods : [ methods ];

	let description = 'Disallows the `.' + methods.join( '`/`.' ) + '` ' +
			( methods.length > 1 ? 'methods' : 'method' );

	description += ' and `$.' + methods.join( '`/`$.' ) + '` ' +
			( methods.length > 1 ? 'utilies' : 'utility' ) + '.';

	description += messageSuffix( message );

	return createRule( function ( context ) {
		return {
			CallExpression: function ( node ) {
				if ( node.callee.type !== 'MemberExpression' ) {
					return;
				}
				const name = node.callee.property.name;
				if ( methods.indexOf( name ) === -1 ) {
					return;
				}
				if ( isjQuery( context, node.callee ) ) {
					context.report( {
						node: node,
						message: messageToPlainString( message, node, name, options ),
						fix: options.fix && options.fix.bind( this, node )
					} );
				}
			}
		};
	}, description, options.fixable, options.deprecated );
}

function eventShorthandFixer( node, fixer ) {
	const name = node.callee.property.name;
	if ( node.callee.parent.arguments.length ) {
		return [
			fixer.replaceText( node.callee.property, 'on' ),
			fixer.insertTextBefore( node.callee.parent.arguments[ 0 ], JSON.stringify( name ) + ', ' )
		];
	} else {
		return [
			fixer.replaceText( node.callee.property, 'trigger' ),
			fixer.insertTextBeforeRange( [ node.end - 1 ], JSON.stringify( name ) )
		];
	}
}

module.exports = {
	isjQuery: isjQuery,
	isjQueryConstructor: isjQueryConstructor,
	isFunction: isFunction,
	createCollectionMethodRule: createCollectionMethodRule,
	createCollectionPropertyRule: createCollectionPropertyRule,
	createUtilMethodRule: createUtilMethodRule,
	createUtilPropertyRule: createUtilPropertyRule,
	createCollectionOrUtilMethodRule: createCollectionOrUtilMethodRule,
	eventShorthandFixer: eventShorthandFixer
};
