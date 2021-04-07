# no-proxy

Disallows the [`$.proxy`](https://api.jquery.com/jQuery.proxy/) utility. Prefer `Function#bind`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.3`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule details

❌ Examples of **incorrect** code:
```js
$.proxy( this.fn, context );
$.proxy( fn, context, arg1, arg2 );
$.proxy( context, 'fnName' );
$.proxy( context, 'fnName', arg1, arg2 );
```

✔️ Examples of **correct** code:
```js
proxy( fn, context );
'test'.proxy( fn, context );
'test'.proxy;
```

🔧 Examples of code **fixed** by this rule:
```js
$.proxy( this.fn, context );        /* → */ this.fn.bind( context );
$.proxy( fn, context, arg1, arg2 ); /* → */ fn.bind( context, arg1, arg2 );
```

## Resources

* [Rule source](/src/rules/no-proxy.js)
* [Test source](/src/tests/no-proxy.js)
