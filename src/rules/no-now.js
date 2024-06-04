'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createUtilMethodRule(
	'now',
	'Prefer `Date.now` to `$.now`',
	{
		fixable: 'code',
		fix: ( node, context, fixer ) => fixer.replaceText( node.callee, 'Date.now' )
	}
);
