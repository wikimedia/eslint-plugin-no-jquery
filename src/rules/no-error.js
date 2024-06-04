'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createUtilMethodRule(
	'error',
	'Prefer `throw` to `$.error`',
	{
		fixable: 'code',
		fix: ( node, context, fixer ) => fixer.replaceText( node.callee, 'throw new Error' )
	}
);
