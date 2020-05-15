# no-now

Disallows the [`$.now`](https://api.jquery.com/jQuery.now/) utility. Prefer `(new Date).getTime()`.

This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

## Rule details

❌ The following patterns are considered errors:
```js
$.now();
```

✔️ The following patterns are not considered errors:
```js
now();
myClass.now();
$div.now();
```

🔧 The `--fix` option can be used to fix problems reported by this rule:
```js
$.now(); /* → */ Date.now();
```

## Resources

* [Rule source](/src/rules/no-now.js)
* [Test source](/src/tests/no-now.js)
