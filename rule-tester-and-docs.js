const eslint = require( 'eslint' );
const RuleTester = eslint.RuleTester;
const linter = new eslint.Linter();
const cli = new eslint.CLIEngine();
const config = cli.getConfigForFile( 'index.js' );
const fs = require( 'fs' );
const rulesets = require( './index' ).configs;

const rulesData = {};

for ( const name in rulesets ) {
	const rules = rulesets[ name ].rules || {};
	for ( const rule in rules ) {
		rulesData[ rule.slice( 10 ) ] = {
			ruleset: name,
			options: Array.isArray( rules[ rule ] ) ? rules[ rule ].slice( 1 ) : null
		};
	}
}

function buildRuleDetails( tests, icon ) {
	let output = '';
	const testsByOptions = {};

	tests.forEach( function ( test ) {
		let options = '';
		if ( test.options ) {
			options = JSON.stringify( test.options );
		}
		testsByOptions[ options ] = testsByOptions[ options ] || [];
		testsByOptions[ options ].push(
			linter.verifyAndFix( typeof test === 'string' ? test : test.code, config ).output
		);
	} );

	for ( const options in testsByOptions ) {
		if ( options ) {
			output += icon + ' With `' + options + '` options:\n';
		}
		output += '```js\n';
		output += testsByOptions[ options ].join( '' );
		output += '```\n';
	}

	return output;

}

/**
 * Extends eslint's RuleTester to also build documentation
 */
class RuleTesterAndDocs extends RuleTester {
	run( name, rule, tests ) {
		if ( process.argv.includes( '--doc' ) ) {
			let output = '';

			output += '# ' + name + '\n\n';

			if ( rule.meta.docs.description ) {
				output += rule.meta.docs.description + '\n\n';
			} else {
				console.warn( 'Rule ' + name + ' has no description.' );
			}

			if ( name in rulesData ) {
				const data = rulesData[ name ];
				output += 'This rule is enabled in `plugin:no-jquery/' + data.ruleset + '`';
				if ( data.options ) {
					output += ' with `' + JSON.stringify( data.options ) + '` options';
				}
				output += '.\n\n';
			}

			if ( rule.meta.fixable ) {
				output += '🔧 The `--fix` option can be used to fix problems reported by this rule.\n\n';
			}

			output += '## Rule details\n\n';

			output += '✗ The following patterns are considered errors:\n' +
				buildRuleDetails( tests.invalid, '✗' );

			output += '\n';

			output += '✓ The following patterns are not considered errors:\n' +
				buildRuleDetails( tests.valid, '✓' );

			fs.writeFileSync(
				'docs/' + name + '.md',
				output
			);
		} else {
			return super.run.apply( this, arguments );
		}
	}
}

module.exports = RuleTesterAndDocs;
