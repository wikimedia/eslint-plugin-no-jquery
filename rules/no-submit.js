'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'submit',
	'Prefer dispatchEvent + form.submit() to $.submit'
);
