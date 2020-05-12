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
## Rule source

* [src/rules/no-is-empty-object.js](/src/rules/no-is-empty-object.js)
