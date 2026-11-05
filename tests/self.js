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
const { LegacyESLint } = require( 'eslint/use-at-your-own-risk' );
const plugin = require( '../src/index' );

const testSelfDir = path.join( __dirname, '../test-self' );
// ESLint 8 uses eslintrc by default, ESLint 9 provides LegacyESLint,
// and ESLint 10 doesn't support eslintrc
const EslintrcESLint = eslint.Linter.version.startsWith( '8.' ) ? eslint.ESLint : LegacyESLint;

/**
 * @param {string} configName
 * @return {Object} ESLint instance
 */
function getESLint( configName ) {
	return new EslintrcESLint( {
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
		it( `${ configName } config`, async function () {
			if ( !EslintrcESLint ) {
				this.skip();
			}
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
