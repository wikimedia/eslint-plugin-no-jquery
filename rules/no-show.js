'use strict';

const utils = require( './utils.js' );

const rule = utils.createCollectionMethodRule( 'show' );

rule.meta.docs.deprecated = true;
rule.meta.docs.replacedBy = [ 'no-visibility' ];

module.exports = rule;
