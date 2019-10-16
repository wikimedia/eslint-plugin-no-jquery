'use strict';

const utils = require( './utils.js' );

const rule = utils.createCollectionMethodRule( 'hide' );

rule.meta.docs.deprecated = true;
rule.meta.docs.replacedBy = [ 'no-visibility' ];

module.exports = rule;
