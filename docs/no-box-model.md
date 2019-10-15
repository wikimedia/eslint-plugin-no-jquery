# no-box-model

Disallows the $.boxModel property.

This rule is enabled in `plugin:no-jquery/deprecated-1.3`.

## Rule details

❌ The following patterns are considered errors:
```js
$.boxModel;
$.boxModel.style;
```

✔️ The following patterns are not considered errors:
```js
boxModel;
a.boxModel;
boxModel.foo;
a.boxModel.foo;
```
## Rule source

* [rules/no-box-model.js](../rules/no-box-model.js)
