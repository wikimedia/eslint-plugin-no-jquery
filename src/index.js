'use strict';

module.exports = {
	rules: {
		'no-ajax': require( './rules/no-ajax' ),
		'no-ajax-events': require( './rules/no-ajax-events' ),
		'no-and-self': require( './rules/no-and-self' ),
		'no-animate': require( './rules/no-animate' ),
		'no-animate-toggle': require( './rules/no-animate-toggle' ),
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
		'no-data': require( './rules/no-data' ),
		'no-deferred': require( './rules/no-deferred' ),
		'no-delegate': require( './rules/no-delegate' ),
		'no-die': require( './rules/no-die' ),
		'no-each': require( './rules/no-each' ),
		'no-each-collection': require( './rules/no-each-collection' ),
		'no-each-util': require( './rules/no-each-util' ),
		'no-error': require( './rules/no-error' ),
		'no-error-shorthand': require( './rules/no-error-shorthand' ),
		'no-event-shorthand': require( './rules/no-event-shorthand' ),
		'no-extend': require( './rules/no-extend' ),
		'no-fade': require( './rules/no-fade' ),
		'no-filter': require( './rules/no-filter' ),
		'no-find': require( './rules/no-find' ),
		'no-find-collection': require( './rules/no-find-collection' ),
		'no-find-util': require( './rules/no-find-util' ),
		'no-fx-interval': require( './rules/no-fx-interval' ),
		'no-global-eval': require( './rules/no-global-eval' ),
		'no-global-selector': require( './rules/no-global-selector' ),
		'no-grep': require( './rules/no-grep' ),
		'no-has': require( './rules/no-has' ),
		'no-hide': require( './rules/no-hide' ),
		'no-hold-ready': require( './rules/no-hold-ready' ),
		'no-html': require( './rules/no-html' ),
		'no-in-array': require( './rules/no-in-array' ),
		'no-is': require( './rules/no-is' ),
		'no-is-array': require( './rules/no-is-array' ),
		'no-is-empty-object': require( './rules/no-is-empty-object' ),
		'no-is-function': require( './rules/no-is-function' ),
		'no-is-numeric': require( './rules/no-is-numeric' ),
		'no-is-plain-object': require( './rules/no-is-plain-object' ),
		'no-is-window': require( './rules/no-is-window' ),
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
				'no-jquery/variable-pattern': 'error'
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
				// Ajax
				'no-jquery/no-ajax': 'error',
				'no-jquery/no-ajax-events': 'error',
				'no-jquery/no-load': 'error',
				'no-jquery/no-parse-xml': 'error'
			}
		},
		// Use this config if you want to avoid all known deprecated jQuery tools.
		deprecated: {
			extends: 'plugin:no-jquery/deprecated-3.5'
		},
		// Use this config if you're writing code targetting jQuery 3.5.x environments.
		'deprecated-3.5': {
			extends: 'plugin:no-jquery/deprecated-3.4',
			rules: {
				// Pass empty options here to override options set in deprecated-3.3
				'no-jquery/no-event-shorthand': [ 'error', {} ],
				'no-jquery/no-trim': 'error'
			}
		},
		// Use this config if you're writing code targetting jQuery 3.4.x environments.
		'deprecated-3.4': {
			extends: 'plugin:no-jquery/deprecated-3.3',
			rules: {
				'no-jquery/no-sizzle': [ 'error', { allowPositional: false, allowOther: true } ]
			}
		},
		// Use this config if you're writing code targetting jQuery 3.3.x environments.
		'deprecated-3.3': {
			extends: 'plugin:no-jquery/deprecated-3.2',
			rules: {
				'no-jquery/no-camel-case': 'error',
				'no-jquery/no-event-shorthand': [ 'error', { allowAjaxEvents: true } ],
				'no-jquery/no-is-function': 'error',
				'no-jquery/no-is-numeric': 'error',
				'no-jquery/no-is-window': 'error',
				'no-jquery/no-now': 'error',
				'no-jquery/no-proxy': 'error',
				'no-jquery/no-type': 'error'
			}
		},
		// Use this config if you're writing code targetting jQuery 3.3.x environments.
		'deprecated-3.2': {
			extends: 'plugin:no-jquery/deprecated-3.0',
			rules: {
				'no-jquery/no-hold-ready': 'error',
				'no-jquery/no-is-array': 'error',
				'no-jquery/no-node-name': 'error'
			}
		},
		// Use this config if you're writing code targetting jQuery 3.0.x environments.
		'deprecated-3.0': {
			extends: 'plugin:no-jquery/deprecated-1.10',
			rules: {
				'no-jquery/no-bind': 'error',
				'no-jquery/no-delegate': 'error',
				'no-jquery/no-fx-interval': 'error',
				'no-jquery/no-parse-json': 'error',
				'no-jquery/no-ready-shorthand': 'error',
				'no-jquery/no-unique': 'error'
			}
		},
		// Use this config if you're writing code targetting jQuery 1.10.x environments.
		'deprecated-1.10': {
			extends: 'plugin:no-jquery/deprecated-1.9',
			rules: {
				'no-jquery/no-context-prop': 'error'
			}
		},
		// Use this config if you're writing code targetting jQuery 1.9.x environments.
		'deprecated-1.9': {
			extends: 'plugin:no-jquery/deprecated-1.8',
			rules: {
				'no-jquery/no-support': 'error'
			}
		},
		// Use this config if you're writing code targetting jQuery 1.8.x environments.
		'deprecated-1.8': {
			extends: 'plugin:no-jquery/deprecated-1.7',
			rules: {
				'no-jquery/no-and-self': 'error',
				// FIXME: `deferred.pipe()`
				'no-jquery/no-error-shorthand': 'error',
				'no-jquery/no-load-shorthand': 'error',
				'no-jquery/no-on-ready': 'error',
				'no-jquery/no-size': 'error',
				// FIXME: `$(...).toggle(fn,fn) (excluding https://api.jquery.com/toggle/)
				'no-jquery/no-unload-shorthand': 'error'
			}
		},
		// Use this config if you're writing code targetting jQuery 1.7.x environments.
		'deprecated-1.7': {
			extends: 'plugin:no-jquery/deprecated-1.3',
			rules: {
				// FIXME: `deferred.isRejected()/isResolved()`
				'no-jquery/no-live': 'error',
				'no-jquery/no-sub': 'error',
				'no-jquery/no-selector-prop': 'error'
			}
		},
		// Use this config if you're writing code targetting jQuery 1.3.x environments.
		'deprecated-1.3': {
			rules: {
				'no-jquery/no-box-model': 'error',
				'no-jquery/no-browser': 'error'
			}
		},
		// Use this config to disallow all usage of jQuery
		all: {
			rules: {
				'no-jquery/no-other-methods': 'error',
				'no-jquery/no-other-utils': 'error',

				// methods
				'no-jquery/no-animate': 'error',
				'no-jquery/no-bind': 'error',
				'no-jquery/no-class': 'error',
				'no-jquery/no-closest': 'error',
				'no-jquery/no-delegate': 'error',
				'no-jquery/no-each-collection': 'error',
				'no-jquery/no-event-shorthand': 'error',
				'no-jquery/no-fade': 'error',
				'no-jquery/no-find-collection': 'error',
				'no-jquery/no-has': 'error',
				'no-jquery/no-html': 'error',
				'no-jquery/no-is': 'error',
				'no-jquery/no-live': 'error',
				'no-jquery/no-load': 'error',
				'no-jquery/no-map-collection': 'error',
				'no-jquery/no-parent': 'error',
				'no-jquery/no-parents': 'error',
				'no-jquery/no-ready': 'error',
				'no-jquery/no-serialize': 'error',
				'no-jquery/no-size': 'error',
				'no-jquery/no-slide': 'error',
				'no-jquery/no-trigger': 'error',
				'no-jquery/no-val': 'error',
				'no-jquery/no-visibility': 'error',
				'no-jquery/no-wrap': 'error',

				// Utils
				'no-jquery/no-ajax': 'error',
				'no-jquery/no-camel-case': 'error',
				'no-jquery/no-contains': 'error',
				'no-jquery/no-deferred': 'error',
				'no-jquery/no-each-util': 'error',
				'no-jquery/no-error': 'error',
				'no-jquery/no-extend': 'error',
				'no-jquery/no-find-util': 'error',
				'no-jquery/no-global-eval': 'error',
				'no-jquery/no-grep': 'error',
				'no-jquery/no-hold-ready': 'error',
				'no-jquery/no-in-array': 'error',
				'no-jquery/no-is-array': 'error',
				'no-jquery/no-is-empty-object': 'error',
				'no-jquery/no-is-function': 'error',
				'no-jquery/no-is-numeric': 'error',
				'no-jquery/no-is-plain-object': 'error',
				'no-jquery/no-is-window': 'error',
				'no-jquery/no-map-util': 'error',
				'no-jquery/no-merge': 'error',
				'no-jquery/no-node-name': 'error',
				'no-jquery/no-noop': 'error',
				'no-jquery/no-now': 'error',
				'no-jquery/no-param': 'error',
				'no-jquery/no-parse-html': 'error',
				'no-jquery/no-parse-json': 'error',
				'no-jquery/no-parse-xml': 'error',
				'no-jquery/no-proxy': 'error',
				'no-jquery/no-trim': 'error',
				'no-jquery/no-type': 'error',
				'no-jquery/no-unique': 'error',
				'no-jquery/no-when': 'error',

				// Method+utils
				'no-jquery/no-attr': 'error',
				'no-jquery/no-clone': 'error',
				'no-jquery/no-css': 'error',
				'no-jquery/no-data': 'error',
				'no-jquery/no-filter': 'error',
				'no-jquery/no-prop': 'error',
				'no-jquery/no-sub': 'error',
				'no-jquery/no-text': 'error'

			}
		}
	}
};
