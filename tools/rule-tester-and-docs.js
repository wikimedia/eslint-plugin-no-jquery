/* eslint-env mocha */
const eslint = require( 'eslint' );
const RuleTester = eslint.RuleTester;
const linter = new eslint.Linter();
const cli = new eslint.CLIEngine();
const config = cli.getConfigForFile( './index.js' );
const fs = require( 'fs' );
const rulesData = require( './rules-data' );

// Restrict config used by verifyAndFix to fixable formatting rules
const formattingRuleNames = [ 'array-bracket-spacing', 'block-spacing', 'brace-style', 'comma-dangle', 'comma-spacing', 'comma-style', 'computed-property-spacing', 'curly', 'dot-location', 'dot-notation', 'func-call-spacing', 'indent', 'key-spacing', 'keyword-spacing', 'linebreak-style', 'no-extra-semi', 'no-irregular-whitespace', 'no-mixed-spaces-and-tabs', 'no-multi-spaces', 'no-regex-spaces', 'no-tabs', 'no-trailing-spaces', 'no-whitespace-before-property', 'object-curly-spacing', 'operator-linebreak', 'quote-props', 'quotes', 'semi', 'semi-spacing', 'semi-style', 'space-before-blocks', 'space-before-function-paren', 'space-in-parens', 'space-infix-ops', 'space-unary-ops', 'spaced-comment', 'switch-colon-spacing', 'template-curly-spacing', 'wrap-iife' ];
const formattingRules = {};
formattingRuleNames.forEach( function ( ruleName ) {
	formattingRules[ ruleName ] = config.rules[ ruleName ];
} );
config.rules = formattingRules;

function buildRuleDetails( tests, icon, showFixes ) {
	let output = '';
	const testsByOptions = {};
	let maxCodeLength;

	function lintFix( code ) {
		return linter.verifyAndFix( code, config ).output.trim();
	}

	if ( showFixes ) {
		maxCodeLength = tests.reduce( function ( acc, test ) {
			return Math.max( acc, lintFix( test.code ).trim().length );
		}, 0 );
	}

	tests.forEach( function ( test ) {
		let options = '';
		if ( test.options || test.settings ) {
			options = JSON.stringify( {
				options: test.options,
				settings: test.settings
			} );
		}
		testsByOptions[ options ] = testsByOptions[ options ] || [];
		if ( showFixes && test.output ) {
			const code = lintFix( test.code ).trim();
			testsByOptions[ options ].push(
				code + ' '.repeat( Math.max( 0, maxCodeLength - code.length ) ) +
				' /* → */ ' +
				lintFix( test.output )
			);
		} else {
			testsByOptions[ options ].push(
				lintFix( typeof test === 'string' ? test : test.code )
			);
		}
	} );

	for ( const options in testsByOptions ) {
		if ( options ) {
			const optionsAndSettings = JSON.parse( options );
			output += icon + ' With';
			if ( optionsAndSettings.options ) {
				output += ' `' + JSON.stringify( optionsAndSettings.options ) + '` options';
			}
			if ( optionsAndSettings.settings ) {
				if ( optionsAndSettings.options ) {
					output += ' and';
				}
				output += ' `' + JSON.stringify( optionsAndSettings.settings ) + '` settings';
			}
			output += ':\n';
		}
		output += '```js\n';
		output += testsByOptions[ options ].join( '\n' );
		output += '\n```\n';
	}

	return output;

}

/**
 * Extends eslint's RuleTester to also build documentation
 */
class RuleTesterAndDocs extends RuleTester {
	run( name, rule, tests ) {
		const isRule = name !== 'settings';
		if ( process.argv.includes( '--doc' ) ) {
			if ( !isRule ) {
				return;
			}

			let output = '';

			output += '# ' + name + '\n\n';

			if ( rule.meta.docs.description ) {
				output += rule.meta.docs.description + '\n\n';
			} else {
				console.warn( 'Rule ' + name + ' has no description.' );
			}

			if ( rule.meta.docs.deprecated ) {
				output += '⚠️ This rule is deprecated.';
				if ( rule.meta.docs.replacedBy ) {
					output += ' Use ' +
						rule.meta.docs.replacedBy.map( ( name ) => '[`' + name + '`](' + name + '.md)' ).join( ', ' ) +
						' instead.';
				}
				output += '\n\n';
			}

			if ( name in rulesData ) {
				rulesData[ name ].forEach( ( data ) => {
					output += 'This rule is enabled in `plugin:no-jquery/' + data.ruleset + '`';
					if ( data.options ) {
						output += ' with `' + JSON.stringify( data.options ) + '` options';
					}
					output += '.\n';
				} );
				output += '\n';
			}

			output += '## Rule details\n\n';

			output += '❌ The following patterns are considered errors:\n' +
				buildRuleDetails( tests.invalid, '❌' );

			output += '\n';

			output += '✔️ The following patterns are not considered errors:\n' +
				buildRuleDetails( tests.valid, '✔️' );

			if ( rule.meta.fixable ) {
				output += '\n';
				output += '🔧 The `--fix` option can be used to fix problems reported by this rule:\n';
				output += buildRuleDetails( tests.invalid.filter( ( test ) => !!test.output ), '🔧', true );
			}

			output += '## Rule source\n\n';
			output += '* [rules/' + name + '.js](../src/rules/' + name + '.js)\n';

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
