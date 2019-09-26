# no-fx-interval

Disallows $.fx.interval.

This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

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
