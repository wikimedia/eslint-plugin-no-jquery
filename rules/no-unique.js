'use strict';

const utils = require( './utils.js' );

module.exports = utils.createUtilMethodRule(
	'unique',
	'Prefer `$.uniqueSort` to `$.unique`',
	'code',
	function ( node, fixer ) {
		return fixer.replaceText( node.callee.property, 'uniqueSort' );
	}
);
