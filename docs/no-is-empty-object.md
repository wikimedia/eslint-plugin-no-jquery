# no-is-empty-object

Disallows the $.isEmptyObject utility.

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
