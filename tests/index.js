'use strict';

const index = require( '../src/index' );
const assert = require( 'assert' );
const fs = require( 'fs' );

describe( 'index', () => {
	it( 'index.js contains all rules', ( done ) => {
		fs.readdir( './src/rules', ( error, files ) => {
			assert.strictEqual( files.length, Object.keys( index.rules ).length );
			done();
		} );
	} );

	it( 'flat configs have the same rules as eslintrc configs', async function () {
		const eslint = require( 'eslint' );
		const { LegacyESLint } = require( 'eslint/use-at-your-own-risk' );
		// ESLint 8 uses eslintrc by default, ESLint 9 provides LegacyESLint,
		// and ESLint 10 doesn't support eslintrc
		const EslintrcESLint = eslint.Linter.version.startsWith( '8.' ) ? eslint.ESLint : LegacyESLint;
		if ( !EslintrcESLint ) {
			this.skip();
		}
		const normalize = ( rules ) => {
			const normalized = {};
			Object.keys( rules ).filter( ( rule ) => rule.startsWith( 'no-jquery/' ) ).forEach( ( rule ) => {
				const value = [].concat( rules[ rule ] );
				const severity = [ 'off', 'warn', 'error' ][ value[ 0 ] ] || value[ 0 ];
				normalized[ rule ] = [ severity, ...value.slice( 1 ) ];
			} );
			return normalized;
		};
		const names = Object.keys( index.configs ).filter( ( name ) => !name.startsWith( 'flat/' ) );
		for ( const name of names ) {
			const eslintrcConfig = await new EslintrcESLint( {
				useEslintrc: false,
				plugins: { 'no-jquery': index },
				baseConfig: { extends: [ 'plugin:no-jquery/' + name ] }
			} ).calculateConfigForFile( 'test.js' );
			assert.deepStrictEqual(
				normalize( index.configs[ 'flat/' + name ].rules ),
				normalize( eslintrcConfig.rules ),
				name
			);
			assert.strictEqual( index.configs[ 'flat/' + name ].plugins[ 'no-jquery' ], index, name );
		}
	} );
} );
