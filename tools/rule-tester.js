'use strict';

const RuleTester = require( 'eslint-docgen' ).RuleTester;

RuleTester.setDefaultConfig( {
	parserOptions: { ecmaVersion: 2015 }
} );

module.exports = RuleTester;
