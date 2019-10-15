# no-error-shorthand

Disallows the .error method. Prefer $.on or $.trigger to $.error.

This rule is enabled in `plugin:no-jquery/deprecated-1.8`.

## Rule details

❌ The following patterns are considered errors:
```js
$( 'div' ).error( handler );
$div.error();
$( 'div' ).first().error();
$( 'div' ).append( $( 'input' ).error() );
```

✔️ The following patterns are not considered errors:
```js
error();
[].error();
div.error();
div.error;
$.error();
```

🔧 The `--fix` option can be used to fix problems reported by this rule:
```js
$( 'div' ).error( handler ); /* → */ $( 'div' ).on( 'error', handler );
$div.error();                /* → */ $div.trigger( 'error' );
```
