# no-is-numeric

Disallows the $.isNumeric utility. Prefer typeof to $.isNumeric.

## Rule details

✗ The following patterns are considered errors:
```js
$.isNumeric();
```

✓ The following patterns are not considered errors:
```js
isNumeric();
myClass.isNumeric();
$div.isNumeric();
```
