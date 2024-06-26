'use strict';

const utils = require( '../utils.js' );

module.exports = {
	meta: {
		type: 'suggestion',
		docs: {
			description: 'Disallows using the ready event on the document.'
		},
		fixable: 'code',
		schema: []
	},

	create: ( context ) => ( {
		'CallExpression:exit': ( node ) => {
			if (
				node.callee.type !== 'MemberExpression' ||
					node.callee.property.name !== 'on'
			) {
				return;
			}
			const arg = node.arguments[ 0 ];
			if ( !arg || arg.value !== 'ready' ) {
				return;
			}

			if ( utils.isjQuery( context, node.callee ) ) {
				context.report( {
					node,
					message: '.on("ready") is not allowed',
					fix: ( fixer ) => ( node.arguments.length > 1 ) ?
						[
							fixer.replaceText( node.callee.property, 'ready' ),
							fixer.replaceTextRange(
								[
									node.arguments[ 0 ].range[ 0 ],
									node.arguments[ 1 ].range[ 0 ]
								],
								''
							)
						] : null
				} );
			}
		}
	} )
};
