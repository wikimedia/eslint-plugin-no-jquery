# no-in-array

Disallows the [`$.inArray`](https://api.jquery.com/jQuery.inArray/) utility. Prefer `Array#indexOf`.

## Rule details

❌ The following patterns are considered errors:
```js
$.inArray();
```

✔️ The following patterns are not considered errors:
```js
inArray();
'test'.inArray();
'test'.inArray;
```
## Rule source

* [src/rules/no-in-array.js](/src/rules/no-in-array.js)
