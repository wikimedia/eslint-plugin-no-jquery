'use strict';

const js = require( '@eslint/js' );
const stylistic = require( '@stylistic/eslint-plugin' );
const jsdoc = require( 'eslint-plugin-jsdoc' );
const n = require( 'eslint-plugin-n' );
const security = require( 'eslint-plugin-security' );
const unicorn = require( 'eslint-plugin-unicorn' );
const mocha = require( 'eslint-plugin-mocha' );
const eslintPlugin = require( 'eslint-plugin-eslint-plugin' );

const selfrules = require( './src/index.js' );

module.exports = [
	// Global ignores
	{
		ignores: [
			'.*/*',
			'node_modules/*',
			'tests/cases/plugin/**',
			'docs/**',
			'test-self/*/**'
		]
	},

	// Base config for all JS files
	{
		files: [ '**/*.js' ],
		plugins: {
			'@stylistic': stylistic,
			jsdoc,
			n,
			security,
			unicorn,
			'eslint-plugin': eslintPlugin
		},
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'script',
			globals: {
				// jQuery
				'$': 'readonly',
				'$x': 'readonly',
				// Node.js globals
				console: 'readonly',
				process: 'readonly',
				Buffer: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				exports: 'writable',
				module: 'readonly',
				require: 'readonly'
			}
		},
		rules: {
			// ESLint recommended
			...js.configs.recommended.rules,

			// Security essentials
			...security.configs[ 'recommended-legacy' ].rules,
			'security/detect-object-injection': 'off',

			// JSDoc essentials
			'jsdoc/check-param-names': 'warn',
			'jsdoc/check-tag-names': 'warn',
			'jsdoc/check-types': 'warn',
			'jsdoc/require-param': 'warn',
			'jsdoc/require-param-type': 'warn',
			'jsdoc/require-returns': 'warn',
			'jsdoc/require-returns-type': 'warn',

			// Node.js essentials
			...n.configs.recommended.rules,
			'n/no-unpublished-require': 'off',
			'n/hashbang': 'off',

			// Wikimedia style essentials
			indent: [ 'error', 'tab', { SwitchCase: 1 } ],
			quotes: [ 'error', 'single', { avoidEscape: true } ],
			semi: [ 'error', 'always' ],
			'comma-dangle': [ 'error', 'never' ],
			'no-extra-semi': 'error',
			'array-bracket-spacing': [ 'error', 'always' ],
			'object-curly-spacing': [ 'error', 'always' ],
			'computed-property-spacing': [ 'error', 'always' ],
			'arrow-spacing': [ 'error', { "before": true, "after": true } ],
			'space-in-parens': [ 'error', 'always', { exceptions: [ 'empty' ] } ],
			'brace-style': [ 'error', '1tbs' ],
			'block-spacing': 'error',
			'comma-spacing': [ 'error', { before: false, after: true } ],
			'key-spacing': [ 'error', { beforeColon: false, afterColon: true } ],
			'keyword-spacing': 'error',
			'space-before-blocks': 'error',
			'space-before-function-paren': [ 'error', { anonymous: 'always', named: 'never' } ],
			'no-trailing-spaces': 'error',
			'no-multiple-empty-lines': [ 'error', { max: 1, maxBOF: 0, maxEOF: 0 } ],
			'eol-last': 'error',
			'linebreak-style': [ 'error', 'unix' ],
			'max-len': [ 'warn', { code: 100, tabWidth: 4, ignoreUrls: true } ],
			strict: [ 'error', 'global' ],
			eqeqeq: 'error',
			curly: [ 'error', 'all' ],
			'no-eval': 'error',
			'no-extend-native': 'error',
			'no-new': 'error',
			'no-with': 'error',
			'no-shadow': [ 'error', { hoist: 'all' } ],
			'no-underscore-dangle': 'error',
			camelcase: [ 'error', { properties: 'always' } ],

			// Unicorn essentials
			'unicorn/prefer-date-now': 'error',
			'unicorn/throw-new-error': 'error',

			// ESLint plugin development rules
			...eslintPlugin.configs.all.rules,
			'eslint-plugin/consistent-output': 'off',
			'eslint-plugin/fixer-return': 'off',
			'eslint-plugin/prefer-message-ids': 'off',
			'eslint-plugin/require-meta-docs-description': 'off',
			'eslint-plugin/require-meta-docs-recommended': 'off',
			'eslint-plugin/require-meta-docs-url': 'off',
			'eslint-plugin/test-case-property-ordering': [ 'error',
				[ 'code', 'options', 'parserOptions', 'settings', 'errors', 'output' ]
			],
			'object-shorthand': [ 'error', 'properties' ],

			// Temporary over-rides for simplicity
			'no-redeclare': 'warn'
		}
	},

	// Source files config - documentation-friendly
	{
		files: [ 'src/index.js' ],
		rules: {
			'prefer-arrow-callback': 'off',
			'max-statements-per-line': 'off',
			'brace-style': 'off'
		}
	},

	// Self-test files config
	{
		files: [ 'test-self/**/*.js' ],
		plugins: {
			selfrules
		}
	},

	// Test files config
	{
		files: [ 'tests/**/*.js' ],
		plugins: {
			mocha
		},
		languageOptions: {
			globals: {
				describe: 'readonly',
				it: 'readonly',
				before: 'readonly',
				after: 'readonly',
				beforeEach: 'readonly',
				afterEach: 'readonly'
			}
		},
		rules: {
			...mocha.configs.recommended.rules,
			'mocha/no-skipped-tests': 'off',
			'mocha/no-mocha-arrows': 'off'
		}
	}
];
