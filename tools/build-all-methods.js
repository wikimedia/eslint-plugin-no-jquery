'use strict';

const fs = require( 'fs' );
const { JSDOM } = require( 'jsdom' );
const { window } = new JSDOM( '' );
const $ = require( 'jquery' )( window );

// Documented as "For internal use only"
const internalMethods = [
	'push',
	'sort',
	'splice'
];

const allMethods = Object.keys( $.fn )
	.filter(
		( k ) => typeof $.fn[ k ] === 'function' &&
			!internalMethods.includes( k )
	)
	.sort();

fs.writeFile(
	'src/all-methods.js',
	'\'use strict\';\n\n' +
	'/* This file is built by build-all-methods.js; do not edit it directly. */\n' +
	'module.exports = ' +
	JSON.stringify( allMethods, null, '\t' ).replace( /"/g, '\'' ) +
	';\n',
	( err ) => {
		if ( err ) {
			throw err;
		}
	}
);
