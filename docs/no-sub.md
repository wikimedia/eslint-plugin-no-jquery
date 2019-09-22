# no-sub

Disallows the $.sub utility.

## Rule details

✗ The following patterns are considered errors:
```js
$.sub();
```

✓ The following patterns are not considered errors:
```js
sub();
'test'.sub();
'test'.sub;
```
