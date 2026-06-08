'use strict';

const RuleTester = require( 'eslint-docgen' ).RuleTester;

const needsLanguageOptions = require( 'eslint' ).Linter.version.startsWith( '8.' );

if ( needsLanguageOptions ) {
	RuleTester.setDefaultConfig( {
		parserOptions: { ecmaVersion: 2015 }
	} );
}

module.exports = RuleTester;
