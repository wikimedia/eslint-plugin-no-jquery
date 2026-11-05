'use strict';

/**
 * Lint the code in test-self/{config} with each config, to check which rules
 * each config enables.
 *
 * Each problem in the code is expected to be disabled with a directive, and
 * unused directives are reported, so the code should have no problems.
 */

const assert = require( 'assert' );
const fs = require( 'fs' );
const path = require( 'path' );
const eslint = require( 'eslint' );
const plugin = require( '../src/index' );

const testSelfDir = path.join( __dirname, '../test-self' );
// ESLint 8 uses eslintrc, ESLint 9+ uses flat config
const useFlatConfig = !eslint.Linter.version.startsWith( '8.' );

/**
 * @param {string} configName
 * @return {Object} ESLint instance
 */
function getESLint( configName ) {
	if ( useFlatConfig ) {
		return new eslint.ESLint( {
			ignore: false,
			overrideConfigFile: true,
			overrideConfig: [
				plugin.configs[ 'flat/' + configName ],
				{
					languageOptions: {
						sourceType: 'script',
						globals: { $: 'readonly' }
					},
					linterOptions: { reportUnusedDisableDirectives: 'error' }
				}
			]
		} );
	}
	return new eslint.ESLint( {
		ignore: false,
		useEslintrc: false,
		plugins: { 'no-jquery': plugin },
		reportUnusedDisableDirectives: 'error',
		baseConfig: {
			plugins: [ 'no-jquery' ],
			extends: [ 'plugin:no-jquery/' + configName ],
			parserOptions: { ecmaVersion: 2018 },
			globals: { $: 'readonly' }
		}
	} );
}

/* eslint-disable mocha/no-setup-in-describe */
describe( 'test-self', () => {
	fs.readdirSync( testSelfDir ).forEach( ( configName ) => {
		it( `${ configName } config`, async () => {
			const results = await getESLint( configName ).lintFiles(
				path.join( testSelfDir, configName, '*.js' )
			);
			assert.notStrictEqual( results.length, 0, 'Files were linted' );
			const messages = [];
			results.forEach( ( result ) => {
				result.messages.forEach( ( message ) => {
					messages.push(
						`${ path.relative( testSelfDir, result.filePath ) }:${ message.line } ${ message.message }`
					);
				} );
			} );
			assert.deepStrictEqual( messages, [] );
		} );
	} );
} );
