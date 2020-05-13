# no-box-model

Disallows the [`$.boxModel`](https://api.jquery.com/jQuery.boxModel/) property.

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

## Resources

* [Rule source](/src/rules/no-box-model.js)
* [Test source](/src/tests/no-box-model.js)
