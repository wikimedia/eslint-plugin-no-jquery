# no-now

Disallows the $.now utility. Prefer (new Date).getTime() to $.now.

This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

## Rule details

✗ The following patterns are considered errors:
```js
$.now();
```

✓ The following patterns are not considered errors:
```js
now();
myClass.now();
$div.now();
```
