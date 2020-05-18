# no-parse-json

Disallows the [`$.parseJSON`](https://api.jquery.com/jQuery.parseJSON/) utility. Prefer `JSON.parse`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

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

🔧 Examples of code **fixed** by using  `--fix`:
```js
$.parseJSON( '{}' ); /* → */ JSON.parse( '{}' );
```

## Resources

* [Rule source](/src/rules/no-parse-json.js)
* [Test source](/src/tests/no-parse-json.js)
