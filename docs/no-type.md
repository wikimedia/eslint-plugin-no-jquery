# no-type

Disallows the $.type utility. Prefer typeof/instanceof to $.type.

This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

## Rule details

❌ The following patterns are considered errors:
```js
$.type();
```

✔️ The following patterns are not considered errors:
```js
type();
myMethod.type();
myMethod.type;
```
## Rule source

* [rules/no-type.js](../rules/no-type.js)
