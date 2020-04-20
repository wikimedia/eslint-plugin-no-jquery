# no-merge

Disallows the [`$.merge`](https://api.jquery.com/jQuery.merge/) utility. Prefer `Array#concat`.

## Rule details

❌ The following patterns are considered errors:
```js
$.merge();
```

✔️ The following patterns are not considered errors:
```js
merge();
'test'.merge();
'test'.merge;
```
## Rule source

* [rules/no-merge.js](../src/rules/no-merge.js)
