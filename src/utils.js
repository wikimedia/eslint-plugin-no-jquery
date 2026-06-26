'use strict';

// Methods which always return something else than a jQuery collection
const nonCollectionReturningMethods = [ 'get', 'hasClass', 'index', 'is', 'position', 'promise', 'serialize', 'serializeArray', 'toArray', 'triggerHandler' ];
// Methods that return something else than a jQuery collection when called without arguments
const nonCollectionReturningAccessors = [ 'height', 'html', 'innerHeight', 'innerWidth', 'offset', 'scrollLeft', 'scrollTop', 'text', 'val', 'width' ];
// Methods that return something else than a jQuery collection when called with a single argument
const nonCollectionReturningValueAccessors = [ 'attr', 'css', 'data', 'prop' ];

const allKnownMethods = require( './all-methods.js' );

function isFunction( node ) {
	return node.type === 'FunctionExpression' || node.type === 'ArrowFunctionExpression';
}

function traverse( context, node, variableTest, constructorTest ) {
	const collectionReturningPlugins = context.settings && context.settings[ 'no-jquery' ] && context.settings[ 'no-jquery' ].collectionReturningPlugins || {};
	while ( node ) {
		switch ( node.type ) {
			case 'CallExpression':
				if ( node.callee.type === 'MemberExpression' && node.callee.property.type === 'Identifier' ) {
					const name = node.callee.property.name;

					if ( constructorTest( node.callee.object ) ) {
						// Utilities never return collections
						return false;
					} else {
						if (
							nonCollectionReturningMethods.includes( name ) ||
							collectionReturningPlugins[ name ] === 'never'
						) {
							// e.g. $foo.toArray()
							return false;
						}

						if (
							(
								nonCollectionReturningAccessors.includes( name ) ||
								collectionReturningPlugins[ name ] === 'accessor'
							) &&
							node.arguments.length === 0
						) {
							// e.g. $foo.val()
							return false;
						}

						if (
							(
								nonCollectionReturningValueAccessors.includes( name ) ||
								collectionReturningPlugins[ name ] === 'valueAccessor'
							) &&
							(
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

						if (
							!allKnownMethods.includes( name ) &&
							!( name in collectionReturningPlugins )
						) {
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
				if ( node.property && !( node.parent.type === 'CallExpression' && node.parent.callee === node ) ) {
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
				if ( node.parent && node.parent.type === 'CallExpression' && node.parent.callee === node ) {
					return constructorTest( node );
				} else {
					return variableTest( node ) || constructorTest( node );
				}
			default:
				return false;
		}
	}
	/* istanbul ignore next */
	throw new Error( 'Invalid node' );
}

function isjQueryConstructor( context, name ) {
	const constructorAliases =
		( context.settings && context.settings[ 'no-jquery' ] && context.settings[ 'no-jquery' ].constructorAliases ) ||
		[ '$', 'jQuery' ];
	return constructorAliases.includes( name );
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
	// eslint-disable-next-line security/detect-non-literal-regexp
	const variablePattern = new RegExp(
		( context.settings && context.settings[ 'no-jquery' ] && context.settings[ 'no-jquery' ].variablePattern ) ||
		'^\\$.'
	);
	return traverse(
		context,
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
 * @param {Array} schema Schema
 * @param {Object} messages `meta.messages` map
 * @return {Object} Rule
 */
function createRule( create, description, fixable, deprecated, schema, messages ) {
	return {
		meta: {
			type: 'suggestion',
			docs: {
				description,
				deprecated: !!deprecated,
				replacedBy: Array.isArray( deprecated ) ? deprecated : undefined
			},
			fixable,
			schema: schema || [],
			messages
		},
		create
	};
}

function messageSuffix( message ) {
	// The rule name should already exist in the first half of the description
	// so avoid repeating it. It is required in the message as that is shown
	// on its own in error reports.
	return message ? ' ' + message.replace( /(Prefer .*) to .*$/, '$1' ) + '.' : '';
}

/**
 * Build the suffix appended to messages of deprecated rules
 *
 * @param {string[]|boolean} [deprecated] Rule is deprecated.
 *  If a string list, the replacedBy rules.
 * @return {string} Message suffix, empty if the rule is not deprecated
 */
function deprecationSuffix( deprecated ) {
	if ( !deprecated ) {
		return '';
	}
	let suffix = '. This rule is deprecated';
	if ( Array.isArray( deprecated ) ) {
		suffix += ', use ' + deprecated.join( ', ' );
	}
	return suffix + '.';
}

/**
 * Resolve the `meta.messages` map and a report selector for a factory rule
 *
 * @param {string|Function} [message] Message used to generate the description. String,
 *  or a function passed `true` to generate a context-agnostic message (for documentation).
 * @param {Object} options Options
 * @param {Object} [options.messages] Explicit `meta.messages` templates. When omitted a
 *  single `default` message is derived from `message` (or a mode-based fallback).
 * @param {Function} [options.report] Report selector
 *  `( node, name ) => ( { messageId, data } )`. Defaults to reporting `default`
 *  with `{ name }` as data.
 * @return {{ messages: Object, getReport: Function }} Messages map and report selector
 */
function resolveMessages( message, options ) {
	const suffix = deprecationSuffix( options.deprecated );
	let messages;
	if ( options.messages ) {
		messages = {};
		for ( const id in options.messages ) {
			messages[ id ] = options.messages[ id ] + suffix;
		}
	} else {
		let template;
		if ( typeof message === 'string' && message ) {
			template = message.replace( /`/g, '' );
		} else {
			// Fallback messages, derived from the rule mode
			switch ( options.mode ) {
				case 'collection':
					template = '.{{name}} is not allowed';
					break;
				case 'util':
					template = '$.{{name}} is not allowed';
					break;
				/* istanbul ignore next: only reached if a collection-util rule omits its message */
				case 'collection-util':
					template = '.{{name}}/$.{{name}} is not allowed';
					break;
			}
		}
		messages = { default: template + suffix };
	}
	const getReport = options.report ||
		( ( node, name ) => ( { messageId: 'default', data: { name } } ) );
	return { messages, getReport };
}

function jQueryCollectionLink( name ) {
	switch ( name ) {
		case 'hasData':
			// See tests/rules/no-data.js
			return '`.' + name + '`';
		case 'push':
		case 'sort':
		case 'splice':
			// Undocumented internal Array.prototype methods
			return '`.' + name + '`';
		default:
			return '[`.' + name + '`](https://api.jquery.com/' + name + '/)';
	}
}

function jQueryGlobalLink( name ) {
	switch ( name ) {
		case 'attr':
		case 'camelCase':
		case 'clone':
		case 'css':
		case 'cssProps':
		case 'filter':
		case 'find':
		case 'prop':
		case 'text':
			// Undocumented methods
			return '`$.' + name + '`';
		default:
			return '[`$.' + name + '`](https://api.jquery.com/jQuery.' + name + '/)';
	}
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
 * @param {boolean} [options.getAndSetOptions] Create options to enabled getting and setting
 *  separately.
 * @return {Object} Rule
 */
function createCollectionMethodRule( methods, message, options ) {
	options = options || {};

	options.mode = 'collection';

	methods = Array.isArray( methods ) ? methods : [ methods ];

	let description = 'Disallows the ' + methods.map( jQueryCollectionLink ).join( '/' ) + ' ' +
		( methods.length > 1 ? 'methods' : 'method' ) + '.';

	description += messageSuffix( message );

	let schema = [];
	if ( options.getAndSetOptions ) {
		schema = [
			{
				type: 'object',
				properties: {
					allowGetOrSet: {
						enum: [ 'none', 'get', 'set' ]
					}
				},
				additionalProperties: false
			}
		];

		// TODO: nonCollectionReturningValueAccessors have 1 argument in getter mode
		description += '\n\nUsing this method only as a getter or a setter can be allowed using the `allowGetOrSet` option:\n' +
			'* `"none"` (default) the method can\'t be used at all\n' +
			'* `"get"` the method can only be used as a getter i.e. with no arguments\n' +
			'* `"set"` the method can only be used as a setter i.e. with arguments';
	}

	const { messages, getReport } = resolveMessages( message, options );

	return createRule( ( context ) => ( {
		'CallExpression:exit': ( node ) => {
			if ( node.callee.type !== 'MemberExpression' ) {
				return;
			}
			const name = node.callee.property.name;
			if (
				!methods.includes( name ) ||
					isjQueryConstructor( context, node.callee.object.name )
			) {
				return;
			}
			const allowGetOrSet = ( context.options[ 0 ] && context.options[ 0 ].allowGetOrSet ) || 'none';
			// TODO: nonCollectionReturningValueAccessors have 1 argument in getter mode
			if (
				( allowGetOrSet === 'get' && !node.arguments.length ) ||
					( allowGetOrSet === 'set' && node.arguments.length )
			) {
				return;
			}

			if ( isjQuery( context, node.callee ) ) {
				context.report( Object.assign( getReport( node, name ), {
					node,
					fix: options.fix && options.fix.bind( this, node, context )
				} ) );
			}
		}
	} ), description, options.fixable, options.deprecated, schema, messages );
}

/**
 * Create a rule for collection properties
 *
 * @param {string} property Property name
 * @param {string|Function} [message] Message to report. See createCollectionMethodRule.
 * @param {Object} [options] Options. See createCollectionMethodRule.
 * @return {Object} Rule
 */
function createCollectionPropertyRule( property, message, options ) {
	options = options || {};

	options.mode = 'collection';

	let description = 'Disallows the ' + jQueryCollectionLink( property ) + ' property.';

	description += messageSuffix( message );

	const { messages, getReport } = resolveMessages( message, options );

	return createRule( ( context ) => ( {
		'MemberExpression:exit': ( node ) => {
			const name = node.property.name;
			if (
				name !== property ||
					node.parent.callee === node
			) {
				return;
			}
			if ( isjQuery( context, node.object ) ) {
				context.report( Object.assign( getReport( node, name ), {
					node,
					fix: options.fix && options.fix.bind( this, node, context )
				} ) );
			}
		}
	} ), description, options.fixable, options.deprecated, [], messages );
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

	options.mode = 'util';

	methods = Array.isArray( methods ) ? methods : [ methods ];

	let description = 'Disallows the ' + methods.map( jQueryGlobalLink ).join( '/' ) + ' ' +
		( methods.length > 1 ? 'utilities' : 'utility' ) + '.';

	description += messageSuffix( message );

	const { messages, getReport } = resolveMessages( message, options );

	return createRule( ( context ) => ( {
		'CallExpression:exit': ( node ) => {
			if ( node.callee.type !== 'MemberExpression' ) {
				return;
			}
			const name = node.callee.property.name;
			if (
				!methods.includes( name ) ||
					!isjQueryConstructor( context, node.callee.object.name )
			) {
				return;
			}

			context.report( Object.assign( getReport( node, name ), {
				node,
				fix: options.fix && options.fix.bind( this, node, context )
			} ) );
		}
	} ), description, options.fixable, options.deprecated, [], messages );
}

/**
 * Create a rule for util properties
 *
 * @param {string} property Property name
 * @param {string|Function} [message] Message to report. See createCollectionMethodRule.
 * @param {Object} [options] Options. See createCollectionMethodRule.
 * @return {Object} Rule
 */
function createUtilPropertyRule( property, message, options ) {
	options = options || {};

	options.mode = 'util';

	let description = 'Disallows the ' + jQueryGlobalLink( property ) + ' property.';

	description += messageSuffix( message );

	const { messages, getReport } = resolveMessages( message, options );

	return createRule( ( context ) => ( {
		'MemberExpression:exit': ( node ) => {
			if ( !isjQueryConstructor( context, node.object.name ) ) {
				return;
			}
			const name = node.property.name;
			if ( name !== property ) {
				return;
			}

			context.report( Object.assign( getReport( node, name ), {
				node,
				fix: options.fix && options.fix.bind( this, node, context )
			} ) );
		}
	} ), description, options.fixable, options.deprecated, [], messages );
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

	options.mode = 'collection-util';

	methods = Array.isArray( methods ) ? methods : [ methods ];

	let description = 'Disallows the ' + methods.map( jQueryCollectionLink ).join( '/' ) + ' ' +
		( methods.length > 1 ? 'methods' : 'method' );

	description += ' and ' + methods.map( jQueryGlobalLink ).join( '/' ) + ' ' +
			( methods.length > 1 ? 'utilities' : 'utility' ) + '.';

	description += messageSuffix( message );

	const { messages, getReport } = resolveMessages( message, options );

	return createRule( ( context ) => ( {
		'CallExpression:exit': ( node ) => {
			if ( node.callee.type !== 'MemberExpression' ) {
				return;
			}
			const name = node.callee.property.name;
			if ( !methods.includes( name ) ) {
				return;
			}
			if ( isjQuery( context, node.callee ) ) {
				context.report( Object.assign( getReport( node, name ), {
					node,
					fix: options.fix && options.fix.bind( this, node, context )
				} ) );
			}
		}
	} ), description, options.fixable, options.deprecated, [], messages );
}

/**
 * Create a rule for a method on any object
 *
 * @param {string|string[]} methods Method or list of method names
 * @param {string|Function} message Message to report. See createCollectionMethodRule.
 * @param {Function} linkGenerator Function to generate a markdown link
 * @param {Object} [options] Options. See createCollectionMethodRule.
 *  for a given function name.
 * @return {Object} Rule
 */
function createUniversalMethodRule( methods, message, linkGenerator, options ) {
	options = options || {};

	options.mode = 'util';

	methods = Array.isArray( methods ) ? methods : [ methods ];

	let description = 'Disallows the ' + methods.map( linkGenerator ).join( '/' ) + ' ' +
		( methods.length > 1 ? 'methods' : 'method' ) + '.';

	description += messageSuffix( message );

	const { messages, getReport } = resolveMessages( message, options );

	return createRule( ( context ) => ( {
		'CallExpression:exit': ( node ) => {
			if ( node.callee.type !== 'MemberExpression' ) {
				return;
			}
			const name = node.callee.property.name;
			if ( !methods.includes( name ) ) {
				return;
			}

			context.report( Object.assign( getReport( node, name ), {
				node,
				fix: options.fix && options.fix.bind( this, node, context )
			} ) );
		}
	} ), description, options.fixable, options.deprecated, [], messages );
}

function eventShorthandFixer( node, context, fixer ) {
	const name = node.callee.property.name;
	if ( node.callee.parent.arguments.length ) {
		return [
			fixer.replaceText( node.callee.property, 'on' ),
			fixer.insertTextBefore( node.callee.parent.arguments[ 0 ], JSON.stringify( name ) + ', ' )
		];
	} else {
		return [
			fixer.replaceText( node.callee.property, 'trigger' ),
			fixer.insertTextBeforeRange( [ node.range[ 1 ] - 1 ], JSON.stringify( name ) )
		];
	}
}

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
	} else if ( node.type === 'Identifier' ) {
		// Dummy value for regex matching
		return 'A0';
	} else {
		return '';
	}
}

// HTML regex (modified from jQuery)
const rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

function isHtmlString( arg ) {
	const value = arg && allLiteral( arg ) && joinLiterals( arg );
	return typeof value === 'string' && value && rquickExpr.exec( value );
}

module.exports = {
	isjQuery,
	isjQueryConstructor,
	isFunction,
	createCollectionMethodRule,
	createCollectionPropertyRule,
	createUtilMethodRule,
	createUtilPropertyRule,
	createCollectionOrUtilMethodRule,
	createUniversalMethodRule,
	eventShorthandFixer,
	jQueryCollectionLink,
	jQueryGlobalLink,
	allLiteral,
	joinLiterals,
	isHtmlString
};
