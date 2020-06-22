# no-proxy

Disallows the [`$.proxy`](https://api.jquery.com/jQuery.proxy/) utility. Prefer `Function#bind`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.proxy();
```

✔️ Examples of **correct** code:
```js
proxy();
'test'.proxy();
'test'.proxy;
```

## Resources

* [Rule source](/src/rules/no-proxy.js)
* [Test source](/src/tests/no-proxy.js)
