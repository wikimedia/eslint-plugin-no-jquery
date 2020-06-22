# no-now

Disallows the [`$.now`](https://api.jquery.com/jQuery.now/) utility. Prefer `(new Date).getTime()`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule details

❌ Examples of **incorrect** code:
```js
$.now();
```

✔️ Examples of **correct** code:
```js
now();
myClass.now();
$div.now();
```

🔧 Examples of code **fixed** by this rule:
```js
$.now(); /* → */ Date.now();
```

## Resources

* [Rule source](/src/rules/no-now.js)
* [Test source](/src/tests/no-now.js)
