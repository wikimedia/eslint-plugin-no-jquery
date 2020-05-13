# no-when

Disallows the [`$.when`](https://api.jquery.com/jQuery.when/) utility. Prefer `Promise.all`.

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

## Rule source

* [src/rules/no-when.js](/src/rules/no-when.js)
