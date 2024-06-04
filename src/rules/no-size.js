'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createCollectionMethodRule(
	'size',
	'Prefer `.length` to `.size`',
	{
		fixable: 'code',
		fix: ( node, context, fixer ) => fixer.replaceTextRange( [ node.callee.property.range[ 0 ], node.range[ 1 ] ], 'length' )
	}
);
