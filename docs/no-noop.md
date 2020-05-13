# no-noop

Disallows the [`$.noop`](https://api.jquery.com/jQuery.noop/) property. Prefer `function(){}`.

## Rule details

❌ The following patterns are considered errors:
```js
$.noop;
$.noop();
```

✔️ The following patterns are not considered errors:
```js
foo.noop;
foo.noop();
foo.noop( bar );
$.noOp;
```

🔧 The `--fix` option can be used to fix problems reported by this rule:
```js
$.noop;   /* → */ ( function () {} );
$.noop(); /* → */ ( function () {}() );
```

## Resources

* [Rule source](/src/rules/no-noop.js)
* [Test source](/src/tests/no-noop.js)
