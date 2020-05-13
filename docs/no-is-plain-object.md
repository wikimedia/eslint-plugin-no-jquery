# no-is-plain-object

Disallows the [`$.isPlainObject`](https://api.jquery.com/jQuery.isPlainObject/) utility.

## Rule details

❌ The following patterns are considered errors:
```js
$.isPlainObject();
```

✔️ The following patterns are not considered errors:
```js
isPlainObject();
myClass.isPlainObject();
$div.isPlainObject();
```

## Resources

* [Rule source](/src/rules/no-is-plain-object.js)
* [Test source](/src/tests/no-is-plain-object.js)
