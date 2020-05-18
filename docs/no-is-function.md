# no-is-function

Disallows the [`$.isFunction`](https://api.jquery.com/jQuery.isFunction/) utility. Prefer `typeof`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

## Rule details

❌ Examples of **incorrect** code:
```js
$.isFunction( expression( arg ) );
if ( $.isFunction( fn ) ) { g(); }
```

✔️ Examples of **correct** code:
```js
isFunction();
myClass.isFunction();
$div.isFunction();
```

🔧 Examples of code **fixed** by using  `--fix`:
```js
$.isFunction( expression( arg ) ); /* → */ typeof expression( arg ) === 'function';
if ( $.isFunction( fn ) ) { g(); } /* → */ if ( typeof fn === 'function' ) { g(); }
```

## Resources

* [Rule source](/src/rules/no-is-function.js)
* [Test source](/src/tests/no-is-function.js)
