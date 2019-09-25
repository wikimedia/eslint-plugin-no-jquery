# no-unload-shorthand

Disallows the .unload method. Prefer $.on or $.trigger to $.unload.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).unload();
$div.unload();
$( 'div' ).first().unload();
$( 'div' ).append( $( 'input' ).unload() );
```

✓ The following patterns are not considered errors:
```js
unload();
[].unload();
div.unload();
div.unload;
$.unload();
```
