# no-grep

Disallows the [`$.grep`](https://api.jquery.com/jQuery.grep/) utility. Prefer `Array#filter` to `$.grep`.

## Rule details

❌ The following patterns are considered errors:
```js
$.grep();
```

✔️ The following patterns are not considered errors:
```js
grep();
'test'.grep();
'test'.grep;
```
## Rule source

* [rules/no-grep.js](../rules/no-grep.js)
