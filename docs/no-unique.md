# no-unique

Disallows the [`$.unique`](https://api.jquery.com/jQuery.unique/) utility. Prefer `$.uniqueSort`.

This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

## Rule details

❌ The following patterns are considered errors:
```js
$.unique( [] );
```

✔️ The following patterns are not considered errors:
```js
unique();
'test'.unique();
'test'.unique;
```

🔧 The `--fix` option can be used to fix problems reported by this rule:
```js
$.unique( [] ); /* → */ $.uniqueSort( [] );
```

## Resources

* [Rule source](/src/rules/no-unique.js)
* [Test source](/src/tests/no-unique.js)
