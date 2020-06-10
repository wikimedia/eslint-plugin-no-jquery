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
} );
