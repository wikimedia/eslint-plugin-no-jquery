'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createUtilMethodRule(
	'unique',
	'Prefer `$.uniqueSort` to `$.unique`',
	{
		fixable: 'code',
		fix: ( node, context, fixer ) => fixer.replaceText( node.callee.property, 'uniqueSort' )
	}
);
