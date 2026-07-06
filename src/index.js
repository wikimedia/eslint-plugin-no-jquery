'use strict';

module.exports = {
	rules: {
		'no-ajax': require( './rules/no-ajax' ),
		'no-ajax-events': require( './rules/no-ajax-events' ),
		'no-and-self': require( './rules/no-and-self' ),
		'no-animate': require( './rules/no-animate' ),
		'no-animate-toggle': require( './rules/no-animate-toggle' ),
		'no-append-html': require( './rules/no-append-html' ),
		'no-attr': require( './rules/no-attr' ),
		'no-bind': require( './rules/no-bind' ),
		'no-box-model': require( './rules/no-box-model' ),
		'no-browser': require( './rules/no-browser' ),
		'no-camel-case': require( './rules/no-camel-case' ),
		'no-class': require( './rules/no-class' ),
		'no-class-state': require( './rules/no-class-state' ),
		'no-clone': require( './rules/no-clone' ),
		'no-closest': require( './rules/no-closest' ),
		'no-constructor-attributes': require( './rules/no-constructor-attributes' ),
		'no-contains': require( './rules/no-contains' ),
		'no-context-prop': require( './rules/no-context-prop' ),
		'no-css': require( './rules/no-css' ),
		'no-css-number': require( './rules/no-css-number' ),
		'no-css-props': require( './rules/no-css-props' ),
		'no-data': require( './rules/no-data' ),
		'no-deferred': require( './rules/no-deferred' ),
		'no-deferred-get-stack-hook': require( './rules/no-deferred-get-stack-hook' ),
		'no-delegate': require( './rules/no-delegate' ),
		'no-die': require( './rules/no-die' ),
		'no-done-fail': require( './rules/no-done-fail' ),
		'no-each': require( './rules/no-each' ),
		'no-each-collection': require( './rules/no-each-collection' ),
		'no-each-util': require( './rules/no-each-util' ),
		'no-error': require( './rules/no-error' ),
		'no-error-shorthand': require( './rules/no-error-shorthand' ),
		'no-escape-selector': require( './rules/no-escape-selector' ),
		'no-event-shorthand': require( './rules/no-event-shorthand' ),
		'no-extend': require( './rules/no-extend' ),
		'no-fade': require( './rules/no-fade' ),
		'no-filter': require( './rules/no-filter' ),
		'no-find': require( './rules/no-find' ),
		'no-find-collection': require( './rules/no-find-collection' ),
		'no-find-util': require( './rules/no-find-util' ),
		'no-fx': require( './rules/no-fx' ),
		'no-fx-interval': require( './rules/no-fx-interval' ),
		'no-global-eval': require( './rules/no-global-eval' ),
		'no-global-selector': require( './rules/no-global-selector' ),
		'no-grep': require( './rules/no-grep' ),
		'no-has': require( './rules/no-has' ),
		'no-hide': require( './rules/no-hide' ),
		'no-hold-ready': require( './rules/no-hold-ready' ),
		'no-html': require( './rules/no-html' ),
		'no-in-array': require( './rules/no-in-array' ),
		'no-internal-array-methods': require( './rules/no-internal-array-methods' ),
		'no-is': require( './rules/no-is' ),
		'no-is-array': require( './rules/no-is-array' ),
		'no-is-empty-object': require( './rules/no-is-empty-object' ),
		'no-is-function': require( './rules/no-is-function' ),
		'no-is-numeric': require( './rules/no-is-numeric' ),
		'no-is-plain-object': require( './rules/no-is-plain-object' ),
		'no-is-window': require( './rules/no-is-window' ),
		'no-jquery-constructor': require( './rules/no-jquery-constructor' ),
		'no-jquery-ui': require( './rules/no-jquery-ui' ),
		'no-live': require( './rules/no-live' ),
		'no-load': require( './rules/no-load' ),
		'no-load-shorthand': require( './rules/no-load-shorthand' ),
		'no-map': require( './rules/no-map' ),
		'no-map-collection': require( './rules/no-map-collection' ),
		'no-map-util': require( './rules/no-map-util' ),
		'no-merge': require( './rules/no-merge' ),
		'no-node-name': require( './rules/no-node-name' ),
		'no-noop': require( './rules/no-noop' ),
		'no-now': require( './rules/no-now' ),
		'no-on-ready': require( './rules/no-on-ready' ),
		'no-other-methods': require( './rules/no-other-methods' ),
		'no-other-utils': require( './rules/no-other-utils' ),
		'no-param': require( './rules/no-param' ),
		'no-parent': require( './rules/no-parent' ),
		'no-parents': require( './rules/no-parents' ),
		'no-parse-html': require( './rules/no-parse-html' ),
		'no-parse-html-literal': require( './rules/no-parse-html-literal' ),
		'no-parse-json': require( './rules/no-parse-json' ),
		'no-parse-xml': require( './rules/no-parse-xml' ),
		'no-prop': require( './rules/no-prop' ),
		'no-proxy': require( './rules/no-proxy' ),
		'no-ready': require( './rules/no-ready' ),
		'no-ready-shorthand': require( './rules/no-ready-shorthand' ),
		'no-selector-prop': require( './rules/no-selector-prop' ),
		'no-serialize': require( './rules/no-serialize' ),
		'no-show': require( './rules/no-show' ),
		'no-size': require( './rules/no-size' ),
		'no-sizzle': require( './rules/no-sizzle' ),
		'no-slide': require( './rules/no-slide' ),
		'no-sub': require( './rules/no-sub' ),
		'no-submit': require( './rules/no-submit' ),
		'no-support': require( './rules/no-support' ),
		'no-text': require( './rules/no-text' ),
		'no-toggle': require( './rules/no-toggle' ),
		'no-trigger': require( './rules/no-trigger' ),
		'no-trim': require( './rules/no-trim' ),
		'no-type': require( './rules/no-type' ),
		'no-unbind': require( './rules/no-unbind' ),
		'no-undelegate': require( './rules/no-undelegate' ),
		'no-unique': require( './rules/no-unique' ),
		'no-unload-shorthand': require( './rules/no-unload-shorthand' ),
		'no-val': require( './rules/no-val' ),
		'no-visibility': require( './rules/no-visibility' ),
		'no-when': require( './rules/no-when' ),
		'no-wrap': require( './rules/no-wrap' ),
		'variable-pattern': require( './rules/variable-pattern' )
	},
	configs: {
		recommended: {
			rules: {
				'no-jquery/variable-pattern': 'error',
				// These methods are internal and eventually removed in 4.0,
				// so warn against usage in all versions.
				'no-jquery/no-internal-array-methods': 'warn'
			}
		},
		// Use this config if you are using jQuery slim build
		slim: {
			rules: {
				// Effects
				'no-jquery/no-animate': 'error',
				'no-jquery/no-animate-toggle': 'error',
				'no-jquery/no-fade': 'error',
				'no-jquery/no-slide': 'error',
				'no-jquery/no-fx': 'error',
				// Ajax
				'no-jquery/no-ajax': 'error',
				'no-jquery/no-ajax-events': 'error',
				'no-jquery/no-load': 'error',
				'no-jquery/no-parse-xml': 'error'
			}
		},
		// Use this config if you want to avoid all known deprecated jQuery tools.
		deprecated: {
			extends: 'plugin:no-jquery/deprecated-4.0'
		},
		'deprecated-4.0': {
			extends: 'plugin:no-jquery/deprecated-3.7',
			rules: {
				'no-jquery/no-class': [ 'error', { onlyDeprecated: true } ],
				'no-jquery/no-is-array': 'error',
				'no-jquery/no-parse-json': 'error',
				'no-jquery/no-trim': 'error',
				'no-jquery/no-type': 'error',
				'no-jquery/no-now': 'error',
				'no-jquery/no-unique': 'error',
				'no-jquery/no-is-numeric': 'error',
				'no-jquery/no-is-function': 'error',
				'no-jquery/no-is-window': 'error',
				'no-jquery/no-deferred-get-stack-hook': 'error',
				'no-jquery/no-camel-case': 'error',
				'no-jquery/no-node-name': 'error',
				'no-jquery/no-css-number': 'error',
				'no-jquery/no-css-props': 'error',
				'no-jquery/no-internal-array-methods': 'error',
				'no-jquery/no-fx-interval': 'error'
			}
		},
		// Use this config if you're writing code targetting jQuery 3.7.x environments.
		'deprecated-3.7': {
			extends: 'plugin:no-jquery/deprecated-3.6',
			rules: {
				'no-jquery/no-deferred-get-stack-hook': 'warn',
				// Not officially deprecated, but removed in 4.0.
				'no-jquery/no-css-number': 'warn',
				'no-jquery/no-css-props': 'warn'
			}
		},
		'deprecated-3.6': {
			extends: 'plugin:no-jquery/deprecated-3.5'
		},
		'deprecated-3.5': {
			extends: 'plugin:no-jquery/deprecated-3.4',
			rules: {
				// Ajax shorthand events are deprecated in 3.5.
				// The other shorthands were deprecated in 3.3.
				'no-jquery/no-event-shorthand': [ 'warn', {} ],
				'no-jquery/no-trim': 'warn'
			}
		},
		'deprecated-3.4': {
			extends: 'plugin:no-jquery/deprecated-3.3',
			rules: {
				'no-jquery/no-sizzle': [ 'warn', { allowPositional: false, allowOther: true } ]
			}
		},
		'deprecated-3.3': {
			extends: 'plugin:no-jquery/deprecated-3.2',
			rules: {
				'no-jquery/no-camel-case': 'warn',
				'no-jquery/no-event-shorthand': [ 'warn', { allowAjaxEvents: true } ],
				'no-jquery/no-is-function': 'warn',
				'no-jquery/no-is-numeric': 'warn',
				'no-jquery/no-is-window': 'warn',
				'no-jquery/no-now': 'warn',
				'no-jquery/no-proxy': 'warn',
				'no-jquery/no-type': 'warn'
			}
		},
		'deprecated-3.2': {
			extends: 'plugin:no-jquery/deprecated-3.1',
			rules: {
				'no-jquery/no-hold-ready': 'warn',
				'no-jquery/no-is-array': 'warn',
				'no-jquery/no-node-name': 'warn'
			}
		},
		'deprecated-3.1': {
			extends: 'plugin:no-jquery/deprecated-3.0'
		},
		'deprecated-3.0': {
			extends: 'plugin:no-jquery/deprecated-2.2',
			rules: {
				'no-jquery/no-bind': 'warn',
				'no-jquery/no-class': [ 'warn', { onlyDeprecated: true } ],
				'no-jquery/no-delegate': 'warn',
				'no-jquery/no-fx-interval': 'warn',
				'no-jquery/no-parse-json': 'warn',
				'no-jquery/no-ready-shorthand': 'warn',
				'no-jquery/no-unique': 'warn',
				// Removed
				'no-jquery/no-and-self': 'error',
				'no-jquery/no-context-prop': 'error',
				'no-jquery/no-error-shorthand': 'error',
				'no-jquery/no-load-shorthand': 'error',
				'no-jquery/no-selector-prop': 'error',
				'no-jquery/no-size': 'error',
				'no-jquery/no-unload-shorthand': 'error'
			}
		},
		'deprecated-2.2': {
			extends: 'plugin:no-jquery/deprecated-2.1'
		},
		'deprecated-2.1': {
			extends: 'plugin:no-jquery/deprecated-2.0'
		},
		'deprecated-2.0': {
			extends: 'plugin:no-jquery/deprecated-1.12'
		},
		'deprecated-1.12': {
			extends: 'plugin:no-jquery/deprecated-1.11'
		},
		'deprecated-1.11': {
			extends: 'plugin:no-jquery/deprecated-1.10'
		},
		'deprecated-1.10': {
			extends: 'plugin:no-jquery/deprecated-1.9',
			rules: {
				'no-jquery/no-context-prop': 'warn'
			}
		},
		'deprecated-1.9': {
			extends: 'plugin:no-jquery/deprecated-1.8',
			rules: {
				'no-jquery/no-support': 'warn',
				// Removed
				'no-jquery/no-browser': 'error',
				'no-jquery/no-live': 'error'
				// FIXME: `$(...).toggle(fn,fn) (excluding https://api.jquery.com/toggle/)
			}
		},
		'deprecated-1.8': {
			extends: 'plugin:no-jquery/deprecated-1.7',
			rules: {
				'no-jquery/no-and-self': 'warn',
				// FIXME: `deferred.pipe()`
				'no-jquery/no-error-shorthand': 'warn',
				'no-jquery/no-load-shorthand': 'warn',
				'no-jquery/no-on-ready': 'warn',
				'no-jquery/no-size': 'warn',
				// FIXME: `$(...).toggle(fn,fn) (excluding https://api.jquery.com/toggle/)
				'no-jquery/no-unload-shorthand': 'warn',
				// Removed
				'no-jquery/no-box-model': 'error'
				// FIXME: `deferred.isRejected()/isResolved()`
			}
		},
		'deprecated-1.7': {
			extends: 'plugin:no-jquery/deprecated-1.6',
			rules: {
				// FIXME: `deferred.isRejected()/isResolved()`
				'no-jquery/no-live': 'warn',
				'no-jquery/no-sub': 'warn',
				'no-jquery/no-selector-prop': 'warn'
			}
		},
		'deprecated-1.6': {
			extends: 'plugin:no-jquery/deprecated-1.5'
		},
		'deprecated-1.5': {
			extends: 'plugin:no-jquery/deprecated-1.4'
		},
		'deprecated-1.4': {
			extends: 'plugin:no-jquery/deprecated-1.3'
		},
		'deprecated-1.3': {
			extends: 'plugin:no-jquery/deprecated-1.2',
			rules: {
				'no-jquery/no-box-model': 'warn',
				'no-jquery/no-browser': 'warn'
			}
		},
		'deprecated-1.2': {
			extends: 'plugin:no-jquery/deprecated-1.1'
		},
		'deprecated-1.1': {
			extends: 'plugin:no-jquery/deprecated-1.0'
		},
		'deprecated-1.0': {},
		// Use this config to disallow all usage of jQuery. It is auto-generated
		// below from every rule except those listed in `notInAllConfig`.
		all: {
			rules: {}
		}
	}
};

// Rules deliberately excluded from the `all` config, with the reason for each.
// Every other rule is included automatically, so new rules are covered by
// default. Most exclusions are rules whose reports would duplicate another
// rule already in the config: either a broader rule that covers the same API,
// or one of the `no-other-methods`/`no-other-utils`/`no-jquery-constructor`
// catch-alls which report any method/utility/constructor call without a more
// specific rule. See https://github.com/wikimedia/eslint-plugin-no-jquery/issues/338
const notInAllConfig = {
	// Not a jQuery API rule; enforces a variable naming convention.
	'variable-pattern': true,

	// Broad rules superseded by the narrower split rules, which are included.
	'no-each': true, // no-each-collection + no-each-util
	'no-find': true, // no-find-collection + no-find-util
	'no-map': true, // no-map-collection + no-map-util

	// Narrow rules superseded by a broader rule which is included.
	'no-class-state': true, // no-class
	'no-unbind': true, // no-bind
	'no-undelegate': true, // no-delegate
	'no-show': true, // no-visibility
	'no-hide': true, // no-visibility
	'no-toggle': true, // no-visibility
	'no-animate-toggle': true, // no-visibility
	'no-fx-interval': true, // no-fx
	'no-parse-html-literal': true, // no-parse-html
	'no-die': true, // no-live
	'no-load-shorthand': true, // no-load

	// Covered by the no-jquery-constructor catch-all.
	'no-constructor-attributes': true,
	'no-global-selector': true,
	'no-sizzle': true,
	'no-ready': true,

	// Covered by the no-event-shorthand rule, which is included.
	'no-ajax-events': true,
	'no-submit': true,

	// Covered by the no-other-methods catch-all.
	'no-and-self': true,
	'no-append-html': true,
	'no-error-shorthand': true,
	'no-internal-array-methods': true,
	'no-unload-shorthand': true,
	'no-on-ready': true,
	'no-jquery-ui': true
};

Object.keys( module.exports.rules ).forEach( ( name ) => {
	if ( !notInAllConfig[ name ] ) {
		module.exports.configs.all.rules[ 'no-jquery/' + name ] = 'warn';
	}
} );
