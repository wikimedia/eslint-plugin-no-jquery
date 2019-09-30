# no-is-array

Disallows the $.isArray utility. Prefer Array.isArray to $.isArray.

This rule is enabled in `plugin:no-jquery/deprecated-3.2`.

🔧 The `--fix` option can be used to fix problems reported by this rule.

## Rule details

❌ The following patterns are considered errors:
```js
$.isArray( [] );
```

✔️ The following patterns are not considered errors:
```js
isArray();
'test'.isArray();
'test'.isArray;
```
