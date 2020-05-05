const rules = require( '../../src/index' ).rules;

const conf = {
	rules: {}
};

for ( let rule in rules ) {
	conf.rules[ 'self/' + rule ] = 'error';
}

module.exports = conf;
