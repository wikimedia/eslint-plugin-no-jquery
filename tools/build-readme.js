'use strict';

const fs = require( 'fs' );
const template = fs.readFileSync( 'README.md.template', { encoding: 'UTF8' } );
const rulesWithConfig = require( 'eslint-docgen' ).rulesWithConfig;
const pluginName = 'no-jquery';
const docPath = 'docs/rules/{name}.md';
const configRename = function ( config ) {
	return config.replace( 'deprecated-', '' );
};

function getRules( deprecated ) {
	return Array.from( rulesWithConfig.keys() ).map( ( rule ) => {
		const fullRule = pluginName + '/' + rule;
		const ruleData = rulesWithConfig.get( rule );
		const docs = ruleData.meta.docs;
		if ( !!docs.deprecated === deprecated ) {
			return '* [`' + fullRule + '`](' + docPath.replace( '{name}', rule ) + ')' +
				(
					docs.replacedBy ?
						' (use [`' + pluginName + '/' + docs.replacedBy + '`](' + docPath.replace( '{name}', docs.replacedBy ) + '))' :
						''
				) +
				(
					ruleData.configMap.size ?
						' ' +
						Array.from( ruleData.configMap.keys() ).map( ( name ) => {
							const options = ruleData.configMap.get( name );
							// TODO: Create util to compare options to defaults
							return '`' + configRename( name ) + ( ( options && Object.keys( options[ 0 ] ).length ) ? '†' : '' ) + '`';
						} ).join( ', ' ) :
						''
				);
		}
		return null;
	} ).filter( ( rule ) => rule ).join( '\n' );
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
