'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'size',
	'Prefer `$.length` to `$.size`',
	{
		fixable: 'code',
		fix: function ( node, fixer ) {
			return fixer.replaceTextRange( [ node.callee.property.start, node.end ], 'length' );
		}
	}
);
