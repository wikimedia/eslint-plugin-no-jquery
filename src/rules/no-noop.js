'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createUtilPropertyRule(
	'noop',
	'Prefer `function(){}` to `$.noop`',
	{
		fixable: 'code',
		fix: ( node, context, fixer ) => fixer.replaceText( node, '(function(){})' )
	}
);
