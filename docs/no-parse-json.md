# no-parse-json

Disallows the [`$.parseJSON`](https://api.jquery.com/jQuery.parseJSON/) utility. Prefer `JSON.parse`.

This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

## Rule details

❌ The following patterns are considered errors:
```js
$.parseJSON( '{}' );
```

✔️ The following patterns are not considered errors:
```js
parseJSON();
$div.parseJSON();
'test'.parseJSON;
```

🔧 The `--fix` option can be used to fix problems reported by this rule:
```js
$.parseJSON( '{}' ); /* → */ JSON.parse( '{}' );
```

## Resources

* [Rule source](/src/rules/no-parse-json.js)
* [Test source](/src/tests/no-parse-json.js)
