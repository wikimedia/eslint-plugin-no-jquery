# no-is-empty-object

Disallows the [`$.isEmptyObject`](https://api.jquery.com/jQuery.isEmptyObject/) utility.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.isEmptyObject();
```

✔️ Examples of **correct** code:
```js
isEmptyObject();
myClass.isEmptyObject();
$div.isEmptyObject();
```

## Resources

* [Rule source](/src/rules/no-is-empty-object.js)
* [Test source](/tests/rules/no-is-empty-object.js)
