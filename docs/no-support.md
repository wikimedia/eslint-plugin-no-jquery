# no-support

Disallows the [`$.support`](https://api.jquery.com/jQuery.support/) property.

This rule is enabled in `plugin:no-jquery/deprecated-1.9`.

## Rule details

❌ The following patterns are considered errors:
```js
$.support;
$.support.style;
```

✔️ The following patterns are not considered errors:
```js
support;
a.support;
support.foo;
a.support.foo;
```
## Rule source

* [src/rules/no-support.js](/src/rules/no-support.js)
