# no-unique

Disallows the $.unique utility. Prefer $.uniqueSort to $.unique.

This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

🔧 The `--fix` option can be used to fix problems reported by this rule.

## Rule details

✗ The following patterns are considered errors:
```js
$.unique( [] );
```

✓ The following patterns are not considered errors:
```js
unique();
'test'.unique();
'test'.unique;
```
