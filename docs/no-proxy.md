# no-proxy

Disallows the $.proxy utility. Prefer Function#bind to $.proxy.

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
