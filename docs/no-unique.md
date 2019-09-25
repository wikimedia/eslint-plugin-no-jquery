# no-unique

Disallows the $.unique utility. Prefer $.uniqueSort to $.unique.

## Rule details

✗ The following patterns are considered errors:
```js
$.unique();
```

✓ The following patterns are not considered errors:
```js
unique();
'test'.unique();
'test'.unique;
```
