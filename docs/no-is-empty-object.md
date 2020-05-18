# no-is-empty-object

Disallows the [`$.isEmptyObject`](https://api.jquery.com/jQuery.isEmptyObject/) utility.

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
* [Test source](/src/tests/no-is-empty-object.js)
