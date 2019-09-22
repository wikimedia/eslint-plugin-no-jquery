# no-error-shorthand

Disallows the .error method. Prefer $.on or $.trigger to $.error.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).error();
$div.error();
$( 'div' ).first().error();
$( 'div' ).append( $( 'input' ).error() );
```

✓ The following patterns are not considered errors:
```js
error();
[].error();
div.error();
div.error;
$.error();
```
