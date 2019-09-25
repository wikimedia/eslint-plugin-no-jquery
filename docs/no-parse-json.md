# no-parse-json

Disallows the $.parseJSON utility. Prefer JSON.parse to $.parseJSON.

## Rule details

✗ The following patterns are considered errors:
```js
$.parseJSON();
```

✓ The following patterns are not considered errors:
```js
parseJSON();
'test'.parseJSON();
'test'.parseJSON;
```
