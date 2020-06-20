# no-parse-json

Disallows the [`$.parseJSON`](https://api.jquery.com/jQuery.parseJSON/) utility. Prefer `JSON.parse`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule details

❌ Examples of **incorrect** code:
```js
$.parseJSON( '{}' );
```

✔️ Examples of **correct** code:
```js
parseJSON();
$div.parseJSON();
'test'.parseJSON;
```

🔧 Examples of code **fixed** by this rule:
```js
$.parseJSON( '{}' ); /* → */ JSON.parse( '{}' );
```

## Resources

* [Rule source](/src/rules/no-parse-json.js)
* [Test source](/src/tests/no-parse-json.js)
