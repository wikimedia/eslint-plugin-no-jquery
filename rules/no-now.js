'use strict';

const utils = require( './utils.js' );

module.exports = utils.createUtilMethodRule(
	'now',
	'Prefer `(new Date).getTime()` to `$.now`',
	{
		fixable: 'code',
		fix: function ( node, fixer ) {
			return fixer.replaceText( node.callee, 'Date.now' );
		}
	}
);
