# no-merge

Disallows the `$.merge` utility. Prefer `Array#concat` to `$.merge`.

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

* [rules/no-merge.js](../rules/no-merge.js)
