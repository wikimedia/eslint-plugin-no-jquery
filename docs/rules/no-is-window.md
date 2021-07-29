# no-is-window

Disallows the [`$.isWindow`](https://api.jquery.com/jQuery.isWindow/) utility.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.isWindow();
```

✔️ Examples of **correct** code:
```js
isWindow();
myClass.isWindow();
```

## Resources

* [Rule source](/src/rules/no-is-window.js)
* [Test source](/tests/rules/no-is-window.js)
