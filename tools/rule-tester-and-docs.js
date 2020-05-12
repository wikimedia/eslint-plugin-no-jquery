const RuleTester = require( 'eslint' ).RuleTester;
const docMode = process.argv.includes( '--doc' );
const nofixMode = process.argv.includes( '--nofix' );

/**
 * Extends ESLint's RuleTester to also build documentation
 */
class RuleTesterAndDocs extends RuleTester {
	run( name, rule, tests, noDoc ) {
		if ( docMode ) {
			if ( noDoc ) {
				return;
			}

			const buildDocsFromTests = require( './build-docs-from-tests' );
			buildDocsFromTests( name, rule, tests );
		} else {
			// Filter out invalid top level property "noDoc", used in documentation building mode
			tests.valid.forEach( ( test ) => {
				delete test.noDoc;
				if ( nofixMode ) {
					delete test.output;
				}
			} );
			tests.invalid.forEach( ( test ) => {
				delete test.noDoc;
				if ( nofixMode ) {
					delete test.output;
				}
			} );
			return super.run.call( this, name, rule, tests );
		}
	}
}

module.exports = RuleTesterAndDocs;
