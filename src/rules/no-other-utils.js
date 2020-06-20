'use strict';

const utils = require( '../utils.js' );

const utilsWithRules = [
	'ajax',
	'attr',
	'camelCase',
	'clone',
	'contains',
	'css',
	'data',
	'Deferred',
	'each',
	'error',
	'extend',
	'filter',
	'find',
	'get',
	'getJSON',
	'getScript',
	'globalEval',
	'grep',
	'hasData',
	'holdReady',
	'inArray',
	'isArray',
	'isEmptyObject',
	'isFunction',
	'isNumeric',
	'isPlainObject',
	'isWindow',
	'map',
	'merge',
	'nodeName',
	'noop',
	'now',
	'param',
	'parseHTML',
	'parseJSON',
	'parseXML',
	'post',
	'prop',
	'proxy',
	'removeAttr',
	'removeData',
	'sub',
	'text',
	'trim',
	'type',
	'unique',
	'when'
];

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallows all utilities not covered by more specific rules.'
		},
		schema: [],
		messages: {
			notAllowed: '$.{{name}} is not allowed'
		}
	},

	create: function ( context ) {
		return {
			'CallExpression:exit': function ( node ) {
				if ( node.callee.type !== 'MemberExpression' ) {
					return;
				}
				const name = node.callee.property.name;
				if (
					!name ||
					utilsWithRules.includes( name ) ||
					!utils.isjQueryConstructor( context, node.callee.object.name )
				) {
					return;
				}

				context.report( {
					node: node,
					messageId: 'notAllowed',
					data: { name: name }
				} );
			}
		};
	}
};
