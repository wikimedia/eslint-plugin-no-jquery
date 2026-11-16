'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createUtilMethodRule(
	'proxy',
	'Prefer `Function#bind` to `$.proxy`',
	{
		fixable: 'code',
		fix: ( node, context, fixer ) => {
			const args = node.arguments;
			if (
				args.length < 2 ||
				args[ 0 ].type === 'SpreadElement' ||
				args[ 1 ].type === 'SpreadElement' ||
				// `$.proxy( context, name )` form
				args[ 1 ].type === 'Literal' ||
				args[ 1 ].type === 'TemplateLiteral'
			) {
				return null;
			}
			const sourceCode = utils.getSourceCode( context );
			const fnText = utils.getOperandText( args[ 0 ], sourceCode );
			// Remove the first argument and its comma. Use tokens and not
			// node ranges, so that parentheses around arguments stay balanced.
			const openParen = sourceCode.getTokenAfter( node.callee );
			const comma = sourceCode.getTokenBefore( args[ 1 ], ( token ) => token.value === ',' );
			const afterComma = sourceCode.getTokenAfter( comma, { includeComments: true } );
			return [
				fixer.replaceText( node.callee, fnText + '.bind' ),
				fixer.removeRange( [ openParen.range[ 1 ], afterComma.range[ 0 ] ] )
			];
		}
	}
);
