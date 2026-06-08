'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createUtilMethodRule(
	'proxy',
	'Prefer `Function#bind` to `$.proxy`',
	{
		fixable: 'code',
		fix: ( node, context, fixer ) => {
			if (
				node.arguments.length >= 2 &&
				node.arguments[ 1 ].type !== 'Literal'
			) {
				// check can be removed when ESLint v8 support is dropped,
				// as `context.sourceCode` will always be defined.
				// `getSourceCode` is deprecated in ESLint v9, and removed in ESLint v10,
				// so we need to support both APIs for now.
				// istanbul ignore next
				const sourceCode = context.sourceCode !== undefined ?
					context.sourceCode :
					context.getSourceCode();
				const fnText = sourceCode.getText( node.arguments[ 0 ] );
				return [
					fixer.replaceText( node.callee, fnText + '.bind' ),
					fixer.removeRange( [
						node.arguments[ 0 ].range[ 0 ],
						node.arguments[ 1 ].range[ 0 ]
					] )
				];
			}
		}
	}
);
