'use strict';

const utils = require( './utils.js' );

module.exports = {
	meta: {
		docs: {
			description: 'Disallows selector extensions provided by Sizzle.'
		},
		schema: []
	},

	create: function ( context ) {
		const forbidden = /:animated|:button|:checkbox|:eq|:even|:file|:first([^-]|$)|:gt|:has|:header|:hidden|:image|:input|:last([^-]|$)|:lt|:odd|:parent|:password|:radio|:reset|:selected|:submit|:text|:visible/;
		const traversals = [
			'children',
			'closest',
			'filter',
			'find',
			'has',
			'is',
			'next',
			'nextAll',
			'nextUntil',
			'not',
			'parent',
			'parents',
			'parentsUntil',
			'prev',
			'prevAll',
			'prevUntil',
			'siblings'
		];

		return {
			CallExpression: function ( node ) {
				if (
					!node.arguments[ 0 ] ||
					!utils.isjQuery( node ) ||
					(
						node.callee.type === 'MemberExpression' &&
						traversals.indexOf( node.callee.property.name ) === -1
					)
				) {
					return;
				}

				if ( forbidden.test( node.arguments[ 0 ].value ) ) {
					context.report( {
						node: node,
						message: 'Selector extensions are not allowed'
					} );
				}
			}
		};
	}
};
