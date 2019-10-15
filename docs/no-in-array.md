# no-in-array

Disallows the $.inArray utility. Prefer Array#indexOf to $.inArray.

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

* [rules/no-in-array.js](../rules/no-in-array.js)
