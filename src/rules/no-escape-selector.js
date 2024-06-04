'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createUtilMethodRule(
	'escapeSelector',
	'Prefer `CSS.escape` to `$.escapeSelector`',
	{
		fixable: 'code',
		fix: ( node, context, fixer ) => fixer.replaceText( node.callee, 'CSS.escape' )
	}
);
