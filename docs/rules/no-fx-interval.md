# no-fx-interval

Disallows [`$.fx.interval`](https://api.jquery.com/jQuery.fx.interval/).

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.fx.interval;
```

✔️ Examples of **correct** code:
```js
interval;
fx.interval;
$.interval;
a.fx.interval;
$.fx;
```

## Resources

* [Rule source](/src/rules/no-fx-interval.js)
* [Test source](/tests/rules/no-fx-interval.js)
