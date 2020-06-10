# no-unique

Disallows the [`$.unique`](https://api.jquery.com/jQuery.unique/) utility. Prefer `$.uniqueSort`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

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

🔧 Examples of code **fixed** by this rule:
```js
$.unique( [] ); /* → */ $.uniqueSort( [] );
```

## Resources

* [Rule source](/src/rules/no-unique.js)
* [Test source](/src/tests/no-unique.js)
