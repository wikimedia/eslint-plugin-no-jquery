# no-error-shorthand

Disallows the [`.error`](https://api.jquery.com/error/) method. Prefer `.on` or `.trigger`.

⚙️ This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

🔧 The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

## Rule details

❌ Examples of **incorrect** code:
```js
$( 'div' ).error( handler );
$div.error();
$( 'div' ).first().error();
$( 'div' ).append( $( 'input' ).error() );
```

✔️ Examples of **correct** code:
```js
error();
[].error();
div.error();
div.error;
$.error();
```

🔧 Examples of code **fixed** by this rule:
```js
$( 'div' ).error( handler );               /* → */ $( 'div' ).on( 'error', handler );
$div.error();                              /* → */ $div.trigger( 'error' );
$( 'div' ).first().error();                /* → */ $( 'div' ).first().trigger( 'error' );
$( 'div' ).append( $( 'input' ).error() ); /* → */ $( 'div' ).append( $( 'input' ).trigger( 'error' ) );
```

## Resources

* [Rule source](/src/rules/no-error-shorthand.js)
* [Test source](/src/tests/no-error-shorthand.js)
