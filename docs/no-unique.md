# no-unique

Disallows the [`$.unique`](https://api.jquery.com/jQuery.unique/) utility. Prefer `$.uniqueSort` to `$.unique`.

This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

## Rule details

❌ The following patterns are considered errors:
```js
$.unique( [] );
```

✔️ The following patterns are not considered errors:
```js
unique();
'test'.unique();
'test'.unique;
```

🔧 The `--fix` option can be used to fix problems reported by this rule:
```js
$.unique( [] ); /* → */ $.uniqueSort( [] );
```
## Rule source

* [rules/no-unique.js](../rules/no-unique.js)
