'use strict';

const RuleTester = require( 'eslint-docgen' ).RuleTester;

RuleTester.setDefaultConfig( {
	languageOptions: { ecmaVersion: 2015, sourceType: 'script' }
} );

module.exports = RuleTester;
