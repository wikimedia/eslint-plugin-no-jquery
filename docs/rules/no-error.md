# no-error

Disallows the [`$.error`](https://api.jquery.com/jQuery.error/) utility. Prefer `throw`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.error();
```

✔️ Examples of **correct** code:
```js
nodeName();
myClass.nodeName();
$div.nodeName();
```

## Resources

* [Rule source](/src/rules/no-error.js)
* [Test source](/src/tests/no-error.js)
