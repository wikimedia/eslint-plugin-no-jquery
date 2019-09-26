# no-is-array

Disallows the $.isArray utility. Prefer Array.isArray to $.isArray.

This rule is enabled in `plugin:no-jquery/deprecated-3.2`.

## Rule details

✗ The following patterns are considered errors:
```js
$.isArray();
```

✓ The following patterns are not considered errors:
```js
isArray();
'test'.isArray();
'test'.isArray;
```
