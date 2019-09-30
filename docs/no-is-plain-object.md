# no-is-plain-object

Disallows the $.isPlainObject utility.

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
