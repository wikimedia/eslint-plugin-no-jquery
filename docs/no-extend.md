# no-extend

Disallows the $.extend utility. Prefer Object.assign or the spread operator to $.extend.

## Rule details

✗ The following patterns are considered errors:
```js
$.extend();
```

✓ The following patterns are not considered errors:
```js
extend();
myMethod.extend();
myMethod.extend;
```
