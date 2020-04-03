const fs = require( 'fs' );
const template = fs.readFileSync( 'README.md.template', { encoding: 'UTF8' } );
const allRules = require( './index' ).rules;
const rulesData = require( './rules-data' );

function getRules( deprecated ) {
	return Object.keys( allRules ).sort().map(
		( rule ) => {
			const docs = allRules[ rule ].meta.docs;
			if ( !!docs.deprecated === deprecated ) {
				return '* [`no-jquery/' + rule + '`](docs/' + rule + '.md)' +
					(
						docs.replacedBy ?
							' (use [`no-jquery/' + docs.replacedBy + '`](docs/' + docs.replacedBy + '.md))' :
							''
					) +
					(
						rulesData[ rule ] ?
							' ' + rulesData[ rule ].map( ( data ) => '`' + data.ruleset + '`' ).join( ', ' ) :
							''
					);
			}
		}
	).filter( ( rule ) => rule ).join( '\n' );
}

fs.writeFileSync(
	'README.md',
	'<!-- This file is built by build-readme.js. Do not edit it directly; edit README.md.template instead. -->\n' +
	template
		.replace( '<!-- rules -->', getRules( false ) )
		.replace( '<!-- deprecated -->', getRules( true ) )
);
