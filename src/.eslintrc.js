module.exports = {
	"overrides": [
		{
			// Rules applying to index.js are used to autofix documentation
			"files": [
				"index.js"
			],
			"rules": {
				// Allow non-arrow functions in examples
				"prefer-arrow-callback": "off",
				// Allow compact single line functions
				"max-statements-per-line": "off",
				"brace-style": "off"
			}
		}
	]
};
