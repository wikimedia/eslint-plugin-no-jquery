# no-ready-shorthand

Disallows the [`.ready`](https://api.jquery.com/ready/) method. Prefer `$()`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-3.0`.

⚙️ This rule is enabled in `plugin:no-jquery/all`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule details

❌ Examples of **incorrect** code:
```js
$( document ).ready( fn );
$div.ready( fn );
$( 'div' ).first().ready( fn );
$( 'div' ).append( $( 'input' ).ready( fn ) );
$div = $( 'div' ).ready( fn );
```

✔️ Examples of **correct** code:
```js
ready( fn );
[].ready( fn );
div.ready( fn );
div.ready;
$.ready( fn );
$( document ).on( 'ready', fn );
$( fn );
```

🔧 Examples of code **fixed** by this rule:
```js
$( document ).ready( fn );      /* → */ $( fn );
$div.ready( fn );               /* → */ $( fn );
$( 'div' ).first().ready( fn ); /* → */ $( fn );
```

## Resources

* [Rule source](/src/rules/no-ready-shorthand.js)
* [Test source](/tests/rules/no-ready-shorthand.js)
