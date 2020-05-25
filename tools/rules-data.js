'use strict';

const main = require( '../package' ).main;
const rulesets = require( '../' + main ).configs;
const rulesData = {};

for ( const name in rulesets ) {
	const rules = rulesets[ name ].rules || {};
	for ( const rule in rules ) {
		const ruleShort = rule.slice( 10 );
		rulesData[ ruleShort ] = rulesData[ ruleShort ] || [];
		rulesData[ ruleShort ].push( {
			ruleset: name,
			options: Array.isArray( rules[ rule ] ) ? rules[ rule ].slice( 1 ) : null
		} );
	}
}

module.exports = rulesData;
