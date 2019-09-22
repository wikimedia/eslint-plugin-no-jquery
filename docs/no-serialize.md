# no-serialize

Disallows the .serialize/serializeArray methods.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).serialize();
$div.serialize();
$( 'div' ).first().serialize();
$( 'div' ).append( $( 'input' ).serialize() );
$( 'div' ).serializeArray();
$div.serializeArray();
$( 'div' ).first().serializeArray();
$( 'div' ).append( $( 'input' ).serializeArray() );
```

✓ The following patterns are not considered errors:
```js
serialize();
[].serialize();
div.serialize();
div.serialize;
serializeArray();
[].serializeArray();
div.serializeArray();
div.serializeArray;
```
