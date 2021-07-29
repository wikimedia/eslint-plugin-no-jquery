# no-noop

Disallows the [`$.noop`](https://api.jquery.com/jQuery.noop/) property. Prefer `function(){}`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule details

❌ Examples of **incorrect** code:
```js
$.noop;
$.noop();
```

✔️ Examples of **correct** code:
```js
foo.noop;
foo.noop();
foo.noop( bar );
$.noOp;
```

🔧 Examples of code **fixed** by this rule:
```js
$.noop;   /* → */ ( function () {} );
$.noop(); /* → */ ( function () {}() );
```

## Resources

* [Rule source](/src/rules/no-noop.js)
* [Test source](/tests/rules/no-noop.js)
