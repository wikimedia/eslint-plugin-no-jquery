# no-is-window

Disallows the $.isWindow utility.

## Rule details

✗ The following patterns are considered errors:
```js
$.isWindow();
```

✓ The following patterns are not considered errors:
```js
isWindow();
myClass.isWindow();
```
