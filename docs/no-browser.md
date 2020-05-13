# no-browser

Disallows the [`$.browser`](https://api.jquery.com/jQuery.browser/) property.

This rule is enabled in `plugin:no-jquery/deprecated-1.3`.

## Rule details

❌ The following patterns are considered errors:
```js
$.browser;
$.browser.style;
```

✔️ The following patterns are not considered errors:
```js
browser;
a.browser;
browser.foo;
a.browser.foo;
$.browsers;
```

## Rule source

* [src/rules/no-browser.js](/src/rules/no-browser.js)
