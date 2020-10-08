# no-error

Disallows the [`$.error`](https://api.jquery.com/jQuery.error/) utility. Prefer `throw`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule details

❌ Examples of **incorrect** code:
```js
$.error( msg );
```

✔️ Examples of **correct** code:
```js
error( msg );
myClass.error( msg );
$div.error( msg );
```

🔧 Examples of code **fixed** by this rule:
```js
$.error( msg ); /* → */ throw new Error( msg );
```

## Resources

* [Rule source](/src/rules/no-error.js)
* [Test source](/src/tests/no-error.js)
