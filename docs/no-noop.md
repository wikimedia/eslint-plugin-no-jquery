# no-noop

Disallows the [`$.noop`](https://api.jquery.com/jQuery.noop/) property. Prefer `function(){}`.

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

🔧 Examples of code **fixed** by using  `--fix`:
```js
$.noop;   /* → */ ( function () {} );
$.noop(); /* → */ ( function () {}() );
```

## Resources

* [Rule source](/src/rules/no-noop.js)
* [Test source](/src/tests/no-noop.js)
