# no-is-numeric

Disallows the [`$.isNumeric`](https://api.jquery.com/jQuery.isNumeric/) utility. Prefer `typeof`.

This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

## Rule details

❌ The following patterns are considered errors:
```js
$.isNumeric();
```

✔️ The following patterns are not considered errors:
```js
isNumeric();
myClass.isNumeric();
$div.isNumeric();
```

## Rule source

* [src/rules/no-is-numeric.js](/src/rules/no-is-numeric.js)
