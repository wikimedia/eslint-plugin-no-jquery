# no-grep

Disallows the [`$.grep`](https://api.jquery.com/jQuery.grep/) utility. Prefer `Array#filter`.

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

* [src/rules/no-grep.js](/src/rules/no-grep.js)
