# no-type

Disallows the $.type utility. Prefer typeof/instanceof to $.type.

## Rule details

✗ The following patterns are considered errors:
```js
$.type();
```

✓ The following patterns are not considered errors:
```js
type();
myMethod.type();
myMethod.type;
```
