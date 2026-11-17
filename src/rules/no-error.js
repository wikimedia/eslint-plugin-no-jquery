'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createUtilMethodRule(
	'error',
	'Prefer `throw` to `$.error`',
	{
		fixable: 'code',
		// `throw` is a statement, so only fix calls that are statements.
		// Do not fix a call in parentheses.
		fix: ( node, context, fixer ) => (
			node.parent.type === 'ExpressionStatement' &&
			node.parent.range[ 0 ] === node.range[ 0 ]
		) ?
			fixer.replaceText( node.callee, 'throw new Error' ) :
			null
	}
);
