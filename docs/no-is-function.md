# no-is-function

Disallows the [`$.isFunction`](https://api.jquery.com/jQuery.isFunction/) utility. Prefer `typeof`.

This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

## Rule details

❌ The following patterns are considered errors:
```js
$.isFunction( expression( arg ) );
if ( $.isFunction( fn ) ) { g(); }
```

✔️ The following patterns are not considered errors:
```js
isFunction();
myClass.isFunction();
$div.isFunction();
```

🔧 The `--fix` option can be used to fix problems reported by this rule:
```js
$.isFunction( expression( arg ) ); /* → */ typeof expression( arg ) === 'function';
if ( $.isFunction( fn ) ) { g(); } /* → */ if ( typeof fn === 'function' ) { g(); }
```
## Rule source

* [rules/no-is-function.js](../src/rules/no-is-function.js)
