'use strict';

const fs = require( 'fs' );
const template = fs.readFileSync( 'README.md.template', { encoding: 'UTF8' } );
const allRules = require( '../src/index' ).rules;
const rulesData = require( './rules-data' );
const pluginName = 'no-jquery';
const docPath = 'docs/{name}.md';
const rulesetRename = function ( ruleset ) {
	return ruleset.replace( 'deprecated-', '' );
};

function getRules( deprecated ) {
	return Object.keys( allRules ).sort().map(
		( rule ) => {
			const docs = allRules[ rule ].meta.docs;
			if ( !!docs.deprecated === deprecated ) {
				return '* [`' + pluginName + '/' + rule + '`](' + docPath.replace( '{name}', rule ) + ')' +
					(
						docs.replacedBy ?
							' (use [`' + pluginName + '/' + docs.replacedBy + '`](' + docPath.replace( '{name}', docs.replacedBy ) + '))' :
							''
					) +
					(
						rulesData[ rule ] ?
							' ' +
							rulesData[ rule ].map(
								// TODO: Create util to compare options to defaults
								( data ) => '`' + rulesetRename( data.ruleset ) + ( ( data.options && Object.keys( data.options[ 0 ] ).length ) ? '†' : '' ) + '`'
							).join( ', ' ) :
							''
					);
			}
			return null;
		}
	).filter( ( rule ) => rule ).join( '\n' );
}

fs.writeFile(
	'README.md',
	'<!-- This file is built by build-readme.js. Do not edit it directly; edit README.md.template instead. -->\n' +
	template
		.replace( '<!-- rules -->', getRules( false ) )
		.replace( '<!-- deprecated -->', getRules( true ) ),
	( err ) => {
		if ( err ) {
			throw err;
		}
	}
);
