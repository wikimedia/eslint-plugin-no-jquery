'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createUtilMethodRule(
	'isArray',
	'Prefer `Array.isArray` to `$.isArray`',
	{
		fixable: 'code',
		fix: ( node, context, fixer ) => fixer.replaceText( node.callee, 'Array.isArray' )
	}
);
