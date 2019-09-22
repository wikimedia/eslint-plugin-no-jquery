# no-fx-interval

Disallows $.fx.interval.

## Rule details

✗ The following patterns are considered errors:
```js
$.fx.interval;
```

✓ The following patterns are not considered errors:
```js
interval;
fx.interval;
$.interval;
a.fx.interval;
$.fx;
```
