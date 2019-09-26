# no-is-array

Disallows the $.isArray utility. Prefer Array.isArray to $.isArray.

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
