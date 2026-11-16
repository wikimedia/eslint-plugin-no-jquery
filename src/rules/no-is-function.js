'use strict';

const utils = require( '../utils.js' );

/**
 * Check if the result of a comparison needs parentheses in its parent
 *
 * The fix replaces the call with an `===` comparison. This has a lower
 * precedence than a call, so add parentheses unless the parent is
 * known to be safe.
 *
 * @param {Object} node CallExpression node to replace
 * @return {boolean} The comparison needs parentheses
 */
function needsParens( node ) {
	const parent = node.parent;
	switch ( parent.type ) {
		case 'ExpressionStatement':
		case 'IfStatement':
		case 'WhileStatement':
		case 'DoWhileStatement':
		case 'ForStatement':
		case 'SwitchStatement':
		case 'SwitchCase':
		case 'ReturnStatement':
		case 'ThrowStatement':
		case 'VariableDeclarator':
		case 'ConditionalExpression':
		case 'LogicalExpression':
		case 'SequenceExpression':
		case 'ArrayExpression':
		case 'TemplateLiteral':
			return false;
		case 'AssignmentExpression':
		case 'AssignmentPattern':
			return parent.right !== node;
		case 'ArrowFunctionExpression':
			return parent.body !== node;
		case 'CallExpression':
		case 'NewExpression':
			return parent.callee === node;
		case 'Property':
			return parent.value !== node;
		default:
			return true;
	}
}

module.exports = utils.createUtilMethodRule(
	'isFunction',
	'Prefer `typeof` to `$.isFunction`',
	{
		fixable: 'code',
		fix: ( node, context, fixer ) => {
			if (
				node.arguments.length !== 1 ||
				node.arguments[ 0 ].type === 'SpreadElement'
			) {
				return null;
			}
			const sourceCode = utils.getSourceCode( context );
			let text = 'typeof ' + utils.getOperandText( node.arguments[ 0 ], sourceCode ) + ' === "function"';
			if ( needsParens( node ) ) {
				text = '(' + text + ')';
			}
			return fixer.replaceText( node, text );
		}
	}
);
