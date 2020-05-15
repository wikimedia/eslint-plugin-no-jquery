# no-is-window

Disallows the [`$.isWindow`](https://api.jquery.com/jQuery.isWindow/) utility.

This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

## Rule details

❌ The following patterns are considered errors:
```js
$.isWindow();
```

✔️ The following patterns are not considered errors:
```js
isWindow();
myClass.isWindow();
```

## Resources

* [Rule source](/src/rules/no-is-window.js)
* [Test source](/src/tests/no-is-window.js)
