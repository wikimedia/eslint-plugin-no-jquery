# no-unique

Disallows the [`$.unique`](https://api.jquery.com/jQuery.unique/) utility. Prefer `$.uniqueSort`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.unique( [] );
```

✔️ Examples of **correct** code:
```js
unique();
'test'.unique();
'test'.unique;
```

🔧 Examples of code **fixed** by using  `--fix`:
```js
$.unique( [] ); /* → */ $.uniqueSort( [] );
```

## Resources

* [Rule source](/src/rules/no-unique.js)
* [Test source](/src/tests/no-unique.js)
