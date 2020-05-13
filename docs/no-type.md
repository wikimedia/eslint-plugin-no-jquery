# no-type

Disallows the [`$.type`](https://api.jquery.com/jQuery.type/) utility. Prefer `typeof`/`instanceof`.

This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

## Rule details

❌ The following patterns are considered errors:
```js
$.type();
```

✔️ The following patterns are not considered errors:
```js
type();
myMethod.type();
myMethod.type;
```

## Rule source

* [src/rules/no-type.js](/src/rules/no-type.js)
