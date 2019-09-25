# no-size

Disallows the .size method. Prefer length to $.size.

## Rule details

✗ The following patterns are considered errors:
```js
$( 'div' ).size();
$div.size();
$( 'div' ).first().size();
$( 'div' ).append( $( 'input' ).size() );
```

✓ The following patterns are not considered errors:
```js
size();
[].size();
div.size();
div.size;
```
