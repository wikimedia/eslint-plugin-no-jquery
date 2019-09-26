# no-proxy

Disallows the $.proxy utility. Prefer Function#bind to $.proxy.

This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

## Rule details

✗ The following patterns are considered errors:
```js
$.proxy();
```

✓ The following patterns are not considered errors:
```js
proxy();
'test'.proxy();
'test'.proxy;
```
