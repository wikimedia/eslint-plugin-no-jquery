# no-parse-json

Disallows the $.parseJSON utility. Prefer JSON.parse to $.parseJSON.

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
