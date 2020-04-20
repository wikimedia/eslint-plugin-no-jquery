'use strict';

module.exports = {
	rules: {
		'variable-pattern': require( './src/rules/variable-pattern' ),
		'no-ajax': require( './src/rules/no-ajax' ),
		'no-ajax-events': require( './src/rules/no-ajax-events' ),
		'no-and-self': require( './src/rules/no-and-self' ),
		'no-animate': require( './src/rules/no-animate' ),
		'no-animate-toggle': require( './src/rules/no-animate-toggle' ),
		'no-attr': require( './src/rules/no-attr' ),
		'no-bind': require( './src/rules/no-bind' ),
		'no-box-model': require( './src/rules/no-box-model' ),
		'no-browser': require( './src/rules/no-browser' ),
		'no-camel-case': require( './src/rules/no-camel-case' ),
		'no-class': require( './src/rules/no-class' ),
		'no-class-state': require( './src/rules/no-class-state' ),
		'no-clone': require( './src/rules/no-clone' ),
		'no-closest': require( './src/rules/no-closest' ),
		'no-constructor-attributes': require( './src/rules/no-constructor-attributes' ),
		'no-contains': require( './src/rules/no-contains' ),
		'no-context-prop': require( './src/rules/no-context-prop' ),
		'no-css': require( './src/rules/no-css' ),
		'no-data': require( './src/rules/no-data' ),
		'no-deferred': require( './src/rules/no-deferred' ),
		'no-delegate': require( './src/rules/no-delegate' ),
		'no-die': require( './src/rules/no-die' ),
		'no-each': require( './src/rules/no-each' ),
		'no-each-collection': require( './src/rules/no-each-collection' ),
		'no-each-util': require( './src/rules/no-each-util' ),
		'no-error': require( './src/rules/no-error' ),
		'no-error-shorthand': require( './src/rules/no-error-shorthand' ),
		'no-event-shorthand': require( './src/rules/no-event-shorthand' ),
		'no-extend': require( './src/rules/no-extend' ),
		'no-fade': require( './src/rules/no-fade' ),
		'no-filter': require( './src/rules/no-filter' ),
		'no-find': require( './src/rules/no-find' ),
		'no-find-collection': require( './src/rules/no-find-collection' ),
		'no-find-util': require( './src/rules/no-find-util' ),
		'no-fx-interval': require( './src/rules/no-fx-interval' ),
		'no-global-eval': require( './src/rules/no-global-eval' ),
		'no-grep': require( './src/rules/no-grep' ),
		'no-has': require( './src/rules/no-has' ),
		'no-hide': require( './src/rules/no-hide' ),
		'no-hold-ready': require( './src/rules/no-hold-ready' ),
		'no-html': require( './src/rules/no-html' ),
		'no-in-array': require( './src/rules/no-in-array' ),
		'no-is-array': require( './src/rules/no-is-array' ),
		'no-is-empty-object': require( './src/rules/no-is-empty-object' ),
		'no-is-plain-object': require( './src/rules/no-is-plain-object' ),
		'no-is-function': require( './src/rules/no-is-function' ),
		'no-is-numeric': require( './src/rules/no-is-numeric' ),
		'no-is-window': require( './src/rules/no-is-window' ),
		'no-is': require( './src/rules/no-is' ),
		'no-live': require( './src/rules/no-live' ),
		'no-load': require( './src/rules/no-load' ),
		'no-load-shorthand': require( './src/rules/no-load-shorthand' ),
		'no-map': require( './src/rules/no-map' ),
		'no-map-collection': require( './src/rules/no-map-collection' ),
		'no-map-util': require( './src/rules/no-map-util' ),
		'no-merge': require( './src/rules/no-merge' ),
		'no-node-name': require( './src/rules/no-node-name' ),
		'no-noop': require( './src/rules/no-noop' ),
		'no-now': require( './src/rules/no-now' ),
		'no-on-ready': require( './src/rules/no-on-ready' ),
		'no-param': require( './src/rules/no-param' ),
		'no-parent': require( './src/rules/no-parent' ),
		'no-parents': require( './src/rules/no-parents' ),
		'no-parse-html': require( './src/rules/no-parse-html' ),
		'no-parse-html-literal': require( './src/rules/no-parse-html-literal' ),
		'no-parse-json': require( './src/rules/no-parse-json' ),
		'no-parse-xml': require( './src/rules/no-parse-xml' ),
		'no-prop': require( './src/rules/no-prop' ),
		'no-proxy': require( './src/rules/no-proxy' ),
		'no-ready': require( './src/rules/no-ready' ),
		'no-ready-shorthand': require( './src/rules/no-ready-shorthand' ),
		'no-selector-prop': require( './src/rules/no-selector-prop' ),
		'no-serialize': require( './src/rules/no-serialize' ),
		'no-global-selector': require( './src/rules/no-global-selector' ),
		'no-show': require( './src/rules/no-show' ),
		'no-size': require( './src/rules/no-size' ),
		'no-sizzle': require( './src/rules/no-sizzle' ),
		'no-slide': require( './src/rules/no-slide' ),
		'no-sub': require( './src/rules/no-sub' ),
		'no-submit': require( './src/rules/no-submit' ),
		'no-support': require( './src/rules/no-support' ),
		'no-text': require( './src/rules/no-text' ),
		'no-toggle': require( './src/rules/no-toggle' ),
		'no-trigger': require( './src/rules/no-trigger' ),
		'no-trim': require( './src/rules/no-trim' ),
		'no-type': require( './src/rules/no-type' ),
		'no-unbind': require( './src/rules/no-unbind' ),
		'no-undelegate': require( './src/rules/no-undelegate' ),
		'no-unique': require( './src/rules/no-unique' ),
		'no-unload-shorthand': require( './src/rules/no-unload-shorthand' ),
		'no-val': require( './src/rules/no-val' ),
		'no-visibility': require( './src/rules/no-visibility' ),
		'no-when': require( './src/rules/no-when' ),
		'no-wrap': require( './src/rules/no-wrap' )
	},
	configs: {
		// Use this profile if you are using jQuery slim build
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
		// Use this profile if you want to avoid all known deprecated jQuery tools.
		deprecated: {
			extends: 'plugin:no-jquery/deprecated-3.5'
		},
		// Use this profile if you're writing code targetting jQuery 3.5.x environments.
		'deprecated-3.5': {
			extends: 'plugin:no-jquery/deprecated-3.4',
			rules: {
				'no-jquery/no-event-shorthand': 'error',
				'no-jquery/no-trim': 'error'
			}
		},
		// Use this profile if you're writing code targetting jQuery 3.4.x environments.
		'deprecated-3.4': {
			extends: 'plugin:no-jquery/deprecated-3.3',
			rules: {
				'no-jquery/no-sizzle': [ 'error', { allowPositional: false, allowOther: true } ]
			}
		},
		// Use this profile if you're writing code targetting jQuery 3.3.x environments.
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
		// Use this profile if you're writing code targetting jQuery 3.3.x environments.
		'deprecated-3.2': {
			extends: 'plugin:no-jquery/deprecated-3.0',
			rules: {
				'no-jquery/no-hold-ready': 'error',
				'no-jquery/no-is-array': 'error',
				'no-jquery/no-node-name': 'error'
			}
		},
		// Use this profile if you're writing code targetting jQuery 3.0.x environments.
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
		// Use this profile if you're writing code targetting jQuery 1.10.x environments.
		'deprecated-1.10': {
			extends: 'plugin:no-jquery/deprecated-1.9',
			rules: {
				'no-jquery/no-context-prop': 'error'
			}
		},
		// Use this profile if you're writing code targetting jQuery 1.9.x environments.
		'deprecated-1.9': {
			extends: 'plugin:no-jquery/deprecated-1.8',
			rules: {
				'no-jquery/no-support': 'error'
			}
		},
		// Use this profile if you're writing code targetting jQuery 1.8.x environments.
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
		// Use this profile if you're writing code targetting jQuery 1.7.x environments.
		'deprecated-1.7': {
			extends: 'plugin:no-jquery/deprecated-1.3',
			rules: {
				// FIXME: `deferred.isRejected()/isResolved()`
				'no-jquery/no-live': 'error',
				'no-jquery/no-sub': 'error',
				'no-jquery/no-selector-prop': 'error'
			}
		},
		// Use this profile if you're writing code targetting jQuery 1.3.x environments.
		'deprecated-1.3': {
			rules: {
				'no-jquery/no-box-model': 'error',
				'no-jquery/no-browser': 'error'
			}
		}
	}
};
