# no-when

Disallows the $.when utility. Prefer Promise.all to $.when.

## Rule details

❌ The following patterns are considered errors:
```js
$.when( a, b );
```

✔️ The following patterns are not considered errors:
```js
When();
new When();
'test'.when();
'test'.when;
$when();
```
