const rulesDirPlugin = require( 'eslint-plugin-rulesdir' );
const rules = require( '../index.js' ).rules;

// Relative to root
rulesDirPlugin.RULES_DIR = './src/rules';

const conf = {
	"plugins": [
		"rulesdir"
	],
	"globals": {
		"$": "readonly"
	},
	"rules": {}
};

for ( let rule in rules ) {
	conf.rules[ 'rulesdir/' + rule ] = 'error';
}

module.exports = conf;
