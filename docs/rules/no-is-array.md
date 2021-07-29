# no-is-array

Disallows the [`$.isArray`](https://api.jquery.com/jQuery.isArray/) utility. Prefer `Array.isArray`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.2`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule details

❌ Examples of **incorrect** code:
```js
$.isArray( [] );
```

✔️ Examples of **correct** code:
```js
isArray();
'test'.isArray();
'test'.isArray;
```

🔧 Examples of code **fixed** by this rule:
```js
$.isArray( [] ); /* → */ Array.isArray( [] );
```

## Resources

* [Rule source](/src/rules/no-is-array.js)
* [Test source](/tests/rules/no-is-array.js)
