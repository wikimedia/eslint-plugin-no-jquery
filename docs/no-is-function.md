# no-is-function

Disallows the $.isFunction utility. Prefer typeof to $.isFunction.

## Rule details

✗ The following patterns are considered errors:
```js
$.isFunction();
```

✓ The following patterns are not considered errors:
```js
isFunction();
myClass.isFunction();
$div.isFunction();
```
