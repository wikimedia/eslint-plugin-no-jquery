# no-escape-selector

Disallows the [`$.escapeSelector`](https://api.jquery.com/jQuery.escapeSelector/) utility. Prefer `CSS.escape`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule details

❌ Examples of **incorrect** code:
```js
$.escapeSelector( '.foo>' );
```

✔️ Examples of **correct** code:
```js
escapeSelector( '.foo>' );
myClass.escapeSelector( '.foo>' );
$div.escapeSelector( '.foo>' );
```

🔧 Examples of code **fixed** by this rule:
```js
$.escapeSelector( '.foo>' ); /* → */ CSS.escape( '.foo>' );
```

## Resources

* [Rule source](/src/rules/no-escape-selector.js)
* [Test source](/src/tests/no-escape-selector.js)
