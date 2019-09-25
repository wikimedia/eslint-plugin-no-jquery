# no-browser

Disallows the $.browser property.

## Rule details

✗ The following patterns are considered errors:
```js
$.browser;
$.browser.style;
```

✓ The following patterns are not considered errors:
```js
browser;
a.browser;
browser.foo;
a.browser.foo;
```
