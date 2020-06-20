# no-is-plain-object

Disallows the [`$.isPlainObject`](https://api.jquery.com/jQuery.isPlainObject/) utility.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.isPlainObject();
```

✔️ Examples of **correct** code:
```js
isPlainObject();
myClass.isPlainObject();
$div.isPlainObject();
```

## Resources

* [Rule source](/src/rules/no-is-plain-object.js)
* [Test source](/src/tests/no-is-plain-object.js)
