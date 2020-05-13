# no-sub

Disallows the [`$.sub`](https://api.jquery.com/jQuery.sub/) utility.

This rule is enabled in `plugin:no-jquery/deprecated-1.7`.

## Rule details

❌ The following patterns are considered errors:
```js
$.sub();
```

✔️ The following patterns are not considered errors:
```js
sub();
'test'.sub();
'test'.sub;
```

## Rule source

* [src/rules/no-sub.js](/src/rules/no-sub.js)
