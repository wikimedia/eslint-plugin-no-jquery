'use strict';

const utils = require( '../utils.js' );

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallows selector extensions provided by Sizzle. Use the `allowPositional` option to allow positional selectors. ' +
				'Use the `allowOther` option to allow all other selectors. These options are used in the `deprecated-3.4` ruleset as only positional ' +
				'selectors were deprecated in that version.'
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowPositional: {
						type: 'boolean'
					},
					allowOther: {
						type: 'boolean'
					}
				},
				additionalProperties: false
			}
		]
	},

	create: ( context ) => {
		const forbiddenPositional = /:eq|:even|:first([^-]|$)|:gt|:last([^-]|$)|:lt|:nth([^-]|$)|:odd/;
		const forbiddenOther = /:animated|:button|:checkbox|:file|:has|:header|:hidden|:image|:input|:parent|:password|:radio|:reset|:selected|:submit|:text|:visible/;
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
			'CallExpression:exit': ( node ) => {
				if (
					!node.arguments[ 0 ] ||
					!utils.isjQuery( context, node.callee ) ||
					(
						node.callee.type === 'MemberExpression' &&
						!traversals.includes( node.callee.property.name )
					)
				) {
					return;
				}

				const allowPositional = context.options[ 0 ] &&
					context.options[ 0 ].allowPositional;
				const allowOther = context.options[ 0 ] &&
					context.options[ 0 ].allowOther;
				const value = utils.joinLiterals( node.arguments[ 0 ] );

				if ( !allowPositional && forbiddenPositional.test( value ) ) {
					context.report( {
						node,
						message: 'Positional selector extensions are not allowed'
					} );
				} else if ( !allowOther && forbiddenOther.test( value ) ) {
					context.report( {
						node,
						message: 'Selector extensions are not allowed'
					} );
				}
			}
		};
	}
};
