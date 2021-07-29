# no-unload-shorthand

Disallows the [`.unload`](https://api.jquery.com/unload/) method. Prefer `.on` or `.trigger`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).unload( handler );
$div.unload();
$( 'div' ).first().unload();
$( 'div' ).append( $( 'input' ).unload() );
```

✔️ Examples of **correct** code:
```js
unload();
[].unload();
div.unload();
div.unload;
$.unload();
```

🔧 Examples of code **fixed** by this rule:
```js
$( 'div' ).unload( handler );               /* → */ $( 'div' ).on( 'unload', handler );
$div.unload();                              /* → */ $div.trigger( 'unload' );
$( 'div' ).first().unload();                /* → */ $( 'div' ).first().trigger( 'unload' );
$( 'div' ).append( $( 'input' ).unload() ); /* → */ $( 'div' ).append( $( 'input' ).trigger( 'unload' ) );
```

## Resources

* [Rule source](/src/rules/no-unload-shorthand.js)
* [Test source](/tests/rules/no-unload-shorthand.js)
