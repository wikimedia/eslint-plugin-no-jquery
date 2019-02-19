'use strict';

module.exports = {
	rules: {
		ajax: require( './rules/ajax' ),
		'ajax-events': require( './rules/ajax-events' ),
		'and-self': require( './rules/and-self' ),
		animate: require( './rules/animate' ),
		'animate-toggle': require( './rules/animate-toggle' ),
		attr: require( './rules/attr' ),
		bind: require( './rules/bind' ),
		'box-model': require( './rules/box-model' ),
		browser: require( './rules/browser' ),
		class: require( './rules/class' ),
		clone: require( './rules/clone' ),
		closest: require( './rules/closest' ),
		'context-prop': require( './rules/context-prop' ),
		css: require( './rules/css' ),
		data: require( './rules/data' ),
		deferred: require( './rules/deferred' ),
		delegate: require( './rules/delegate' ),
		die: require( './rules/die' ),
		each: require( './rules/each' ),
		'each-collection': require( './rules/each-collection' ),
		'each-util': require( './rules/each-util' ),
		'error-shorthand': require( './rules/error-shorthand' ),
		'event-shorthand': require( './rules/event-shorthand' ),
		extend: require( './rules/extend' ),
		fade: require( './rules/fade' ),
		filter: require( './rules/filter' ),
		find: require( './rules/find' ),
		'fx-interval': require( './rules/fx-interval' ),
		'global-eval': require( './rules/global-eval' ),
		grep: require( './rules/grep' ),
		has: require( './rules/has' ),
		hide: require( './rules/hide' ),
		'hold-ready': require( './rules/hold-ready' ),
		html: require( './rules/html' ),
		'in-array': require( './rules/in-array' ),
		'is-array': require( './rules/is-array' ),
		'is-function': require( './rules/is-function' ),
		'is-numeric': require( './rules/is-numeric' ),
		'is-window': require( './rules/is-window' ),
		is: require( './rules/is' ),
		live: require( './rules/live' ),
		load: require( './rules/load' ),
		'load-shorthand': require( './rules/load-shorthand' ),
		map: require( './rules/map' ),
		'map-collection': require( './rules/map-collection' ),
		'map-util': require( './rules/map-util' ),
		merge: require( './rules/merge' ),
		noop: require( './rules/noop' ),
		now: require( './rules/now' ),
		'on-ready': require( './rules/on-ready' ),
		param: require( './rules/param' ),
		parent: require( './rules/parent' ),
		parents: require( './rules/parents' ),
		'parse-html': require( './rules/parse-html' ),
		'parse-html-literal': require( './rules/parse-html-literal' ),
		'parse-json': require( './rules/parse-json' ),
		prop: require( './rules/prop' ),
		proxy: require( './rules/proxy' ),
		ready: require( './rules/ready' ),
		'ready-shorthand': require( './rules/ready-shorthand' ),
		'selector-prop': require( './rules/selector-prop' ),
		serialize: require( './rules/serialize' ),
		'global-selector': require( './rules/global-selector' ),
		show: require( './rules/show' ),
		size: require( './rules/size' ),
		sizzle: require( './rules/sizzle' ),
		slide: require( './rules/slide' ),
		sub: require( './rules/sub' ),
		submit: require( './rules/submit' ),
		support: require( './rules/support' ),
		text: require( './rules/text' ),
		toggle: require( './rules/toggle' ),
		trigger: require( './rules/trigger' ),
		trim: require( './rules/trim' ),
		type: require( './rules/type' ),
		unbind: require( './rules/unbind' ),
		undelegate: require( './rules/undelegate' ),
		unique: require( './rules/unique' ),
		'unload-shorthand': require( './rules/unload-shorthand' ),
		val: require( './rules/val' ),
		when: require( './rules/when' ),
		wrap: require( './rules/wrap' )
	},
	configs: {
		// Use this profile if you want to avoid all known deprecated jQuery tools.
		deprecated: {
			extends: 'plugin:no-jquery/deprecated-3.3'
		},
		// Use this profile if you're writing code targetting jQuery 3.3.x environments.
		'deprecated-3.3': {
			extends: 'plugin:no-jquery/deprecated-3.0',
			rules: {
				'no-jquery/is-function': 'error',
				'no-jquery/is-window': 'error'
			}
		},
		// Use this profile if you're writing code targetting jQuery 3.0.x environments.
		'deprecated-3.0': {
			extends: 'plugin:no-jquery/deprecated-1.10',
			rules: {
				'no-jquery/bind': 'error',
				'no-jquery/unbind': 'error',
				'no-jquery/delegate': 'error',
				'no-jquery/undelegate': 'error',
				'no-jquery/fx-interval': 'error',
				'no-jquery/parse-json': 'error',
				'no-jquery/ready-shorthand': 'error',
				'no-jquery/unique': 'error'
			}
		},
		// Use this profile if you're writing code targetting jQuery 1.10.x environments.
		'deprecated-1.10': {
			extends: 'plugin:no-jquery/deprecated-1.9',
			rules: {
				'no-jquery/context-prop': 'error'
			}
		},
		// Use this profile if you're writing code targetting jQuery 1.9.x environments.
		'deprecated-1.9': {
			extends: 'plugin:no-jquery/deprecated-1.8',
			rules: {
				'no-jquery/support': 'error'
			}
		},
		// Use this profile if you're writing code targetting jQuery 1.8.x environments.
		'deprecated-1.8': {
			extends: 'plugin:no-jquery/deprecated-1.7',
			rules: {
				'no-jquery/and-self': 'error',
				// FIXME: `deferred.pipe()`
				'no-jquery/error-shorthand': 'error',
				'no-jquery/load-shorthand': 'error',
				'no-jquery/on-ready': 'error',
				'no-jquery/size': 'error',
				// FIXME: `$(...).toggle(fn,fn) (excluding https://api.jquery.com/toggle/)
				'no-jquery/unload-shorthand': 'error'
			}
		},
		// Use this profile if you're writing code targetting jQuery 1.7.x environments.
		'deprecated-1.7': {
			extends: 'plugin:no-jquery/deprecated-1.3',
			rules: {
				// FIXME: `deferred.isRejected()/isResolved()`
				'no-jquery/die': 'error',
				'no-jquery/live': 'error',
				'no-jquery/sub': 'error',
				'no-jquery/selector-prop': 'error'
			}
		},
		// Use this profile if you're writing code targetting jQuery 1.3.x environments.
		'deprecated-1.3': {
			rules: {
				'no-jquery/box-model': 'error',
				'no-jquery/browser': 'error'
			}
		}
	}
};
