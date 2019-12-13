'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'andSelf',
	'Prefer `$.addBack` to `$.andSelf`',
	{
		fixable: 'code',
		fix: function ( node, fixer ) {
			return fixer.replaceText( node.callee.property, 'addBack' );
		}
	}
);
