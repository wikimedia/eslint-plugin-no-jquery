const rules = require( '../src/index' ).rules;

const conf = {
	"root": true,
	"extends": "wikimedia/client",
	"plugins": [ "self" ],
	"globals": {
		"$": "readonly"
	},
	"rules": {}
};

for ( let rule in rules ) {
	conf.rules[ 'self/' + rule ] = 'error';
}

module.exports = conf;
