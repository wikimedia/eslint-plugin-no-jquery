'use strict';

const utils = require( '../utils.js' );

module.exports = utils.createUniversalMethodRule(
	[ 'done', 'fail' ],
	( node ) => node === true ?
		'Prefer `.then`' :
		`Prefer .then to .${ node.callee.property.name }`,
	( method ) => `[\`.${ method }\`](https://api.jquery.com/deferred.${ method }/)`
);
