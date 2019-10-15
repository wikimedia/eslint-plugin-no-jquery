# no-noop

Disallows the $.noop property. Prefer function(){} to $.noop.

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
```

🔧 The `--fix` option can be used to fix problems reported by this rule:
```js
$.noop;   /* → */ ( function () {} );
$.noop(); /* → */ ( function () {}() );
```
