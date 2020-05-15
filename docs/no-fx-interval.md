# no-fx-interval

Disallows [`$.fx.interval`](https://api.jquery.com/jQuery.fx.interval/).

This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

## Rule details

❌ The following patterns are considered errors:
```js
$.fx.interval;
```

✔️ The following patterns are not considered errors:
```js
interval;
fx.interval;
$.interval;
a.fx.interval;
$.fx;
```

## Resources

* [Rule source](/src/rules/no-fx-interval.js)
* [Test source](/src/tests/no-fx-interval.js)
