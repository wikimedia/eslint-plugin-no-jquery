# no-box-model

Disallows the [`$.boxModel`](https://api.jquery.com/jQuery.boxModel/) property.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-1.3`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.boxModel;
$.boxModel.style;
```

✔️ Examples of **correct** code:
```js
boxModel;
a.boxModel;
boxModel.foo;
a.boxModel.foo;
```

## Resources

* [Rule source](/src/rules/no-box-model.js)
* [Test source](/src/tests/no-box-model.js)
