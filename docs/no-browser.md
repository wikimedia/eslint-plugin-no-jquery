# no-browser

Disallows the `$.browser` property.

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
```
## Rule source

* [rules/no-browser.js](../rules/no-browser.js)
