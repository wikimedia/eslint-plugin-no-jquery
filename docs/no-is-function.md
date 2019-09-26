# no-is-function

Disallows the $.isFunction utility. Prefer typeof to $.isFunction.

This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

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
