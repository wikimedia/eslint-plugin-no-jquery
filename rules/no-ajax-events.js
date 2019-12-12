'use strict';

const utils = require( './utils.js' );

const disallowedEvents = [
	'ajaxStart',
	'ajaxSend',
	'ajaxSuccess',
	'ajaxError',
	'ajaxComplete',
	'ajaxStop'
];

const MemberExpression = 'MemberExpression';
const Literal = 'Literal';

module.exports = {
	meta: {
		docs: {
			description: 'Disallows global ajax events handlers: `ajaxStart`/`ajaxSend`/`ajaxSuccess`/`ajaxError`/`ajaxComplete`/`ajaxStop`. Prefer local events.'
		},
		schema: []
	},

	create: function ( context ) {
		return {
			CallExpression: function ( node ) {
				if ( node.callee.type !== MemberExpression ) {
					return;
				}
				let usedMethod;
				if (
					node.callee.property.name === 'on' &&
					node.arguments.length >= 1
				) {
					const arg = node.arguments[ 0 ];
					if (
						arg.type === Literal &&
						disallowedEvents.includes( arg.value )
					) {
						usedMethod = arg.value;
					}
				}
				if ( disallowedEvents.includes( node.callee.property.name ) ) {
					usedMethod = node.callee.property.name;
				}
				if ( usedMethod && utils.isjQuery( context, node ) ) {
					context.report( {
						node: node,
						message: `Prefer local event to ${usedMethod}`
					} );
				}
			}
		};
	}
};
