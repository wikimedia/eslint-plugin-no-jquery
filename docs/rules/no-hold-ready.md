# no-hold-ready

Disallows the [`$.holdReady`](https://api.jquery.com/jQuery.holdReady/) utility.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.2`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.holdReady();
```

✔️ Examples of **correct** code:
```js
holdReady();
'test'.holdReady();
'test'.holdReady;
```

## Resources

* [Rule source](/src/rules/no-hold-ready.js)
* [Test source](/tests/rules/no-hold-ready.js)
