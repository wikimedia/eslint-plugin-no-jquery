# no-hold-ready

Disallows the $.holdReady utility.

## Rule details

✗ The following patterns are considered errors:
```js
$.holdReady();
```

✓ The following patterns are not considered errors:
```js
holdReady();
'test'.holdReady();
'test'.holdReady;
```
