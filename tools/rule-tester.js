'use strict';

const DocGenRuleTester = require( 'eslint-docgen' ).RuleTester;
const noFix = process.argv.includes( '--nofix' );

class RuleTester extends DocGenRuleTester {
	run( name, rule, tests ) {
		if ( noFix ) {
			tests.valid.forEach( ( test ) => {
				delete test.output;
			} );
			tests.invalid.forEach( ( test ) => {
				delete test.output;
			} );
		}
		return super.run.call( this, name, rule, tests );
	}
}

module.exports = RuleTester;
