# no-support

Disallows the $.support property.

## Rule details

✗ The following patterns are considered errors:
```js
$.support;
$.support.style;
```

✓ The following patterns are not considered errors:
```js
support;
a.support;
support.foo;
a.support.foo;
```
