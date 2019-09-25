'use strict';

const utils = require( './utils.js' );

module.exports = utils.createCollectionMethodRule(
	'submit',
	'Prefer EventTarget#dispatchEvent + form.submit() to $.submit'
);
