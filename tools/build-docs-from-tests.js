const eslint = require( 'eslint' );
const linter = new eslint.Linter();
const fs = require( 'fs' );
const pluginName = 'no-jquery';
const rulePath = 'src/rules/{name}.js';
const docPath = 'docs/{name}.md';

const rulesData = require( './rules-data' );
const cli = new eslint.CLIEngine();
const config = cli.getConfigForFile( './src/index.js' );

// Restrict config used by verifyAndFix to fixable formatting rules
const formattingRuleNames = [ 'array-bracket-spacing', 'block-spacing', 'brace-style', 'comma-dangle', 'comma-spacing', 'comma-style', 'computed-property-spacing', 'curly', 'dot-location', 'dot-notation', 'func-call-spacing', 'indent', 'key-spacing', 'keyword-spacing', 'linebreak-style', 'no-extra-semi', 'no-irregular-whitespace', 'no-mixed-spaces-and-tabs', 'no-multi-spaces', 'no-regex-spaces', 'no-tabs', 'no-trailing-spaces', 'no-whitespace-before-property', 'object-curly-spacing', 'operator-linebreak', 'quote-props', 'quotes', 'semi', 'semi-spacing', 'semi-style', 'space-before-blocks', 'space-before-function-paren', 'space-in-parens', 'space-infix-ops', 'space-unary-ops', 'spaced-comment', 'switch-colon-spacing', 'template-curly-spacing', 'wrap-iife' ];
const formattingRules = {};
formattingRuleNames.forEach( function ( ruleName ) {
	formattingRules[ ruleName ] = config.rules[ ruleName ];
} );
config.rules = formattingRules;

function buildRuleDetails( tests, icon, showFixes ) {

	function lintFixList( codeList ) {
		// Concatentate into one code block to improve performance
		const separator = '\n/* - */\n';
		const codeBlock = codeList.join( ';' + separator );
		// Add an extra semicolon to avoid syntax error
		return linter.verifyAndFix( codeBlock, config ).output
			.split( separator ).map( ( code ) => code.trim() );
	}

	let output = '';
	let maxCodeLength;
	const testsByOptions = {};

	const fixedCode = lintFixList( tests.map( ( test ) => typeof test === 'string' ? test : test.code ) );

	let fixedOutput;
	if ( showFixes ) {
		maxCodeLength = fixedCode.reduce( function ( acc, code ) {
			return Math.max( acc, code.length );
		}, 0 );
		fixedOutput = lintFixList( tests.map( ( test ) => test.output || 'null' ) );
	}

	tests.forEach( function ( test, i ) {
		let options = '';
		const code = fixedCode[ i ];

		if ( test.noDoc ) {
			return;
		}
		if ( test.options || test.settings ) {
			options = JSON.stringify( {
				options: test.options,
				settings: test.settings
			} );
		}
		testsByOptions[ options ] = testsByOptions[ options ] || [];
		if ( showFixes && test.output ) {
			testsByOptions[ options ].push(
				code + ' '.repeat( Math.max( 0, maxCodeLength - code.length ) ) +
				' /* → */ ' +
				fixedOutput[ i ]
			);
		} else {
			testsByOptions[ options ].push( code );
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

function buildDocsFromTests( name, rule, tests ) {
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
		output += rulesData[ name ].map( ( data ) =>
			'This rule is enabled in `plugin:' + pluginName + '/' + data.ruleset + '`' +
				// TODO: Create util to compare options to defaults
				( data.options && Object.keys( data.options[ 0 ] ).length ?
					' with `' + JSON.stringify( data.options ) + '` options' :
					'' ) +
				'.\n\n'
		).join( '' );
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

	output += '\n';

	const path = rulePath.replace( '{name}', name );

	output += '## Rule source\n\n';
	output += '* [' + path + '](/' + path + ')\n';

	fs.writeFile(
		docPath.replace( '{name}', name ),
		output,
		( err ) => {
			if ( err ) {
				throw err;
			}
		}
	);
}

module.exports = buildDocsFromTests;
