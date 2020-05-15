# no-is-empty-object

Disallows the [`$.isEmptyObject`](https://api.jquery.com/jQuery.isEmptyObject/) utility.

## Rule details

❌ The following patterns are considered errors:
```js
$.isEmptyObject();
```

✔️ The following patterns are not considered errors:
```js
isEmptyObject();
myClass.isEmptyObject();
$div.isEmptyObject();
```

## Resources

* [Rule source](/src/rules/no-is-empty-object.js)
* [Test source](/src/tests/no-is-empty-object.js)
