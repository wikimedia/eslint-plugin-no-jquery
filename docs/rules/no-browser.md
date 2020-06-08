# no-browser

Disallows the [`$.browser`](https://api.jquery.com/jQuery.browser/) property.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-1.3`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.browser;
$.browser.style;
```

✔️ Examples of **correct** code:
```js
browser;
a.browser;
browser.foo;
a.browser.foo;
$.browsers;
```

## Resources

* [Rule source](/src/rules/no-browser.js)
* [Test source](/src/tests/no-browser.js)
