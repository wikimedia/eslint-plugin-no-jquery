# no-is-numeric

Disallows the [`$.isNumeric`](https://api.jquery.com/jQuery.isNumeric/) utility. Prefer `typeof`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.isNumeric();
```

✔️ Examples of **correct** code:
```js
isNumeric();
myClass.isNumeric();
$div.isNumeric();
```

## Resources

* [Rule source](/src/rules/no-is-numeric.js)
* [Test source](/tests/rules/no-is-numeric.js)
